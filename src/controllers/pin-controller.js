import { db } from "../models/db.js";
import { TagsSpec } from "../models/joi-schemas.js";

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
    addTags: {
        handler: async function (request, h) {
            const pinId = request.params.id;
            const pin = await db.pinStore.getPinById(pinId);
            const descTag = request.params.description;
            const lattTag = request.params.lattitude;
            const longTag = request.params.lattitude;
            if (descTag) {
                db.pinStore.addDescTag(pinId, descTag);
            }
            if (lattTag) {
                db.pinStore.addLattTag(pinId, lattTag);
            }
            if (longTag) {
                db.pinStore.addLongTag(pinId, longTag);
            }
            const viewData = {
                title: "Pin tags",
                pin: pin,
            };
            return h.view("pin-view", viewData);
        }
    },

    updatePin: {
        handler: async function (request, h) {
            const loggedInUser = request.auth.credentials;
            const pinId = request.params.id;
            const pin = await db.pinStore.getPinById(pinId);
            let updatedPin = {
                name: request.payload.name,
                description: request.payload.description,
                lattitude: request.payload.lattitude,
                longitude: request.payload.longitude,
            };
            await db.pinStore.updatePin(pin, updatedPin);
            const viewData = {
                title: "Pin tags",
                pin: pin,
            };
            return h.view("pin-view", viewData);
        }
    }
};