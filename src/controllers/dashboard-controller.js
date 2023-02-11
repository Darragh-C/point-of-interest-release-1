import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const pins = await db.pinStore.getAllPins();
      const viewData = {
        title: "Point of Interest Dashboard",
        pins: pins,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addPin: {
    handler: async function (request, h) {
      const newPin = {
        name: request.payload.name,
        description: request.payload.description,
        lattitude: request.payload.lattitude,
        longitude: request.payload.longitude,
      };
      await db.pinStore.addPin(newPin);
      return h.redirect("/dashboard");
    },
  },
};
