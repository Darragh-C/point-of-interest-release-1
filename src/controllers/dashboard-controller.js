import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const pins = await db.pinStore.getUserPins(loggedInUser._id);
      const viewData = {
        title: "Point of Interest Dashboard",
        user: loggedInUser,
        pins: pins,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addPin: {
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
