import { db } from "../models/db.js";
import { PinSpec } from "../models/joi-schemas.js";
import { pinUtils } from "../utils/pin-utils.js";
import { categoryUtils } from "../utils/category-utils.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const userPins = await db.pinStore.getUserPins(loggedInUser._id);
      const pinIds = await pinUtils.getPinsIds(userPins);
      const distinctCategories = await db.categoryStore.getPinCategoriesDistinct(pinIds);
      console.log(`distinct: ${distinctCategories}`);
      const categories = await db.categoryStore.getAllCategories();
      const viewData = {
        title: "Point of Interest Dashboard",
        user: loggedInUser,
        pins: userPins,
        distinctcategories: distinctCategories,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addPin: {
    validate: {
      payload: PinSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("dashboard-view", { title: "Pins error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const newPin = {
        userid: loggedInUser._id,
        name: request.payload.name,
        description: request.payload.description,
        lattitude: request.payload.lattitude,
        longitude: request.payload.longitude,
      };
      await db.pinStore.addPin(newPin);
      return h.redirect("/dashboard");
    },
  },

  deletePin: {
    handler: async function (request, h) {
      const pin = await db.pinStore.getPinById(request.params.id);
      console.log(request.params.id);
      await db.pinStore.deletePinById(pin._id);
      return h.redirect("/dashboard");   
    }
  },

  filterCategory: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const categoryObjs = await db.categoryStore.filterCategoryObjs(request.payload.filter);
      console.log(`cat objects: ${categoryObjs}`);
      const filteredPins = [];
      for (let i = 0; i < categoryObjs.length; i+=1) {
          const pin = await db.pinStore.getPinById(categoryObjs[i].pinId);
          filteredPins.push(pin);
      }
      console.log(`filteredPins: ${filteredPins}`);
      const userPins = await db.pinStore.getUserPins(loggedInUser._id);
      const distinctCategories = await db.categoryStore.getPinCategoriesDistinct(await pinUtils.getPinsIds(userPins));
      console.log(`distinct: ${distinctCategories}`);
      const viewData = {
        title: "Point of Interest Dashboard",
        user: loggedInUser,
        pins: filteredPins, 
        distinctcategories: distinctCategories,
      };
      return h.view("dashboard-view", viewData);
    },
  },
};

      /*
      console.log("test");
      console.log(request.payload.filter);
      const categoryObjs = await db.categoryStore.getCatObjsByCategory(request.payload.filter);
      console.log(categoryObjs);
      const pinIds = categoryUtils.getPinsIds(categoryObjs);
      console.log(pinIds);
      console.log("about to filter");
      const filteredPins = await db.pinStore.getPinsById(pinIds);
      console.log("filteredPins");
      console.log(filteredPins);
      */
/*
      const loggedInUser = request.auth.credentials;
      const pins = await db.pinStore.getUserPins(loggedInUser._id);
      //console.log(`All pins: ${pins}`);
      const pinIds = await pinUtils.getPinsIds(pins);
      const distinctCategories = await db.categoryStore.getPinCategoriesDistinct(pinIds);
      const categories = await db.categoryStore.getAllCategories();

      const viewData = {
        title: "Filtered pins",
        pins: filteredPins,
        categories: categories,
        distinctcategories: distinctCategories,
      };
      return h.view("dashboard-view", viewData);
*/