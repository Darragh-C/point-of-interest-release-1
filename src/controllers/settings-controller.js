import { db } from "../models/db.js";

export const settingsController = {
  index: {
    handler: async function (request, h) {
      const viewData = {
        title: "User settings",
      };
      return h.view("settings-view", viewData);
    },
  },
};