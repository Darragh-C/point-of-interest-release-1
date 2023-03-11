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
        const loggedInUser = request.auth.credentials;
        const user = await db.userStore.getUserById(loggedInUser._id);
        /*
        let updatedUser = {};
        if (request.payload.firstname !== null) {
          updatedUser.firstName = request.payload.firstname;
        }
        if (request.payload.lastname !== null) {
          updatedUser.lastName = request.payload.lastname;
        }
        
        //if (user.password == request.payload.password) {
        await db.userStore.updateName(user, updatedUser);
        //} 
        */
        let testName = request.payload.firstname;
        let testLName = request.payload.lastname;
        const viewData = {
          title: "User settings",
          firstname: testName,//loggedInUser.firstName, 
          lastname: testLName,//loggedInUser.lastName, 
        };
        return h.view("settings-view", viewData);
    }
  },
};