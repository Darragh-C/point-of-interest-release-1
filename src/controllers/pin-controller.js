import { db } from "../models/db.js";
import { PinSpec } from "../models/joi-schemas.js";

export const pinController = {
    index: {
      handler: async function (request, h) {
        const pinId = request.params.id;
        const loggedInUser = request.auth.credentials;
        const pin = await db.pinStore.getPinById(pinId);
        const viewData = {
          title: "Pin tags",
          user: loggedInUser,
          pin: pin,
        };
        return h.view("pin-view", viewData);
      },
    },
};