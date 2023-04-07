import { db } from "../models/db.js";
import { PinSpec } from "../models/joi-schemas.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const pins = await db.pinStore.getUserPins(loggedInUser._id);
      const categories = await db.categoryStore.getAllCategories();
      const viewData = {
        title: "Point of Interest Dashboard",
        user: loggedInUser,
        pins: pins,
        categories: categories,
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
      await db.pinStore.deletePinById(pin._id);
      return h.redirect("/dashboard");   
    }
  }
};
