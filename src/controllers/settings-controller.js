import { db } from "../models/db.js";
import { UserSpec } from "../models/joi-schemas.js";

export const settingsController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;  
      const viewData = {
        title: "User settings",
        firstname: loggedInUser.firstName, 
        lastname: loggedInUser.lastName, 
      };
      return h.view("settings-view", viewData);
    },
  },

  editName: {
    handler: async function (request, h) {
        const loggedInUser = request.auth.credentials;
        if (request.password === loggedInUser.password) {
            await db.userStore.editFirstname(loggedInUser, request.firstname);
            await db.userStore.editLastname(loggedInUser, request.secondname);
        }
        return h.redirect("/settings");
    }
  },
};