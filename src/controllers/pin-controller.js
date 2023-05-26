import { db } from "../models/db.js";
import { CategorySpec } from "../models/joi-schemas.js";
import { imageStore } from "../models/image-store.js";

export const pinController = {
  index: {
    handler: async function (request, h) {
      const pinId = request.params.id;
      const loggedInUser = request.auth.credentials;
      const pin = await db.pinStore.getPinById(pinId);
      const categories = await db.categoryStore.getPinCategories(pinId);
      console.log(categories);
      console.log("test");
      const viewData = {
        title: "Pin tags",
        user: loggedInUser,
        pin: pin,
        categories: categories,
      };
      console.log("Rendering pin view");
      return h.view("pin-view", viewData);
    },
  },
  addCategory: {
    validate: {
      payload: CategorySpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("pin-view", { title: "Category error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const pinid = request.params.id;
      const newCategory = {
        category: request.payload.category,
      }; 
      await db.categoryStore.addCategory(pinid, newCategory);
      return h.redirect(`/pin/${pinid}`);
    }
  },

  updatePin: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const pinId = request.params.id;
      const pin = await db.pinStore.getPinById(pinId);
      let updatedPin = {
        name: request.payload.name,
        description: request.payload.description,
        lattitude: request.payload.lattitude,
        longitude: request.payload.longitude,
      };
      await db.pinStore.updatePin(pin, updatedPin);
      return h.redirect(`/pin/${pinId}`);
    }
  },

  updateImage: {
    handler: async function (request, h) {
      const pin = await db.pinStore.getPinById(request.params.id);
      const file = request.payload.imagefile;
      console.log(`imagefile: ${file}`)
      try {
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          console.log('url:');
          console.log(url);
          pin.img = url;
          await db.pinStore.updateImage(pin);
        }
        return h.redirect(`/pin/${pin._id}`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/pin/${pin._id}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
  },
};