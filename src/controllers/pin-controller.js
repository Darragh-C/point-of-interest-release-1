import { db } from "../models/db.js";
import { CategorySpec } from "../models/joi-schemas.js";

export const pinController = {
  index: {
    handler: async function (request, h) {
      const pinId = request.params.id;
      const loggedInUser = request.auth.credentials;
      const pin = await db.pinStore.getPinById(pinId);
      const categories = await db.categoryStore.getPinCategories(pinId);
      const viewData = {
        title: "Pin tags",
        user: loggedInUser,
        pin: pin,
        categories: categories,
      };
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
        pinId: pinid,
        category: request.payload.category,
      }; 
      await db.categoryStore.addCategory(newCategory);
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
  }
};