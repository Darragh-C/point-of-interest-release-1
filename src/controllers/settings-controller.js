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

  updateName: {
    handler: async function (request, h) {
        let loggedInUser = request.auth.credentials;
        const user = await db.userStore.getUserById(loggedInUser._id);
        let userChanges = {};
        if (request.payload.firstname !== null) {
          userChanges.firstName = request.payload.firstname;
        }
        if (request.payload.lastname !== null) {
          userChanges.lastName = request.payload.lastname;
        }
        if (request.payload.password === user.password) {
          await db.userStore.updateName(user, userChanges);
        }
        
        const updatedUser = await db.userStore.getUserById(loggedInUser._id);
        const viewData = {
          title: "User settings",
          firstname: updatedUser.firstName, 
          lastname: updatedUser.lastName, 
        };
        return h.view("settings-view", viewData);
    }
  },

  updateEmail: {
    handler: async function (request, h) {
        let loggedInUser = request.auth.credentials;
        const user = await db.userStore.getUserById(loggedInUser._id);
        let userChanges = {};
        if (request.payload.email !== null) {
          userChanges.email = request.payload.email;
        }
        if (request.payload.password === user.password) {
          await db.userStore.updateEmail(user, userChanges);
        }
        const updatedUser = await db.userStore.getUserById(loggedInUser._id);
        const viewData = {
          title: "User settings",
          firstname: updatedUser.firstName, 
          lastname: updatedUser.lastName, 
        };
        return h.view("settings-view", viewData);
    }
  },

  updatePassword: {
    handler: async function (request, h) {
        let loggedInUser = request.auth.credentials;
        const user = await db.userStore.getUserById(loggedInUser._id);
        let userChanges = {};
        if (request.payload.newpassword !== null) {
          userChanges.password = request.payload.newpassword;
        }
        if (request.payload.oldpassword === user.password) {
          await db.userStore.updatePassword(user, userChanges);
        }
        const updatedUser = await db.userStore.getUserById(loggedInUser._id);
        const viewData = {
          title: "User settings",
          firstname: updatedUser.firstName, 
          lastname: updatedUser.lastName, 
        };
        return h.view("settings-view", viewData);
    }
  },  
};