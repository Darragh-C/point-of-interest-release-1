import { db } from "../models/db.js";
import { UserSpec, UserCredentialsSpec } from "../models/joi-schemas.js";

export const adminController = {
  index: {
      handler: async function (request, h) {
        const loggedInUser = request.auth.credentials;
        const users = await db.userStore.getAllUsers();
        const pins = await db.pinStore.getAllPins();

        const viewData = {
          title: "Admin",
          user: loggedInUser,
          users: users,
          pins: pins,
        };

        console.log("Rendering admin view");
        return h.view("admin-view", viewData);
      },
  },

};