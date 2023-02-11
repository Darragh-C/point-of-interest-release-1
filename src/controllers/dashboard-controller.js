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
      };
      await db.pinStore.addPin(newPin);
      return h.redirect("/dashboard");
    },
  },
};
