import Boom from "@hapi/boom";
import { db } from "../models/db.js";


export const pinApi = {
  create: {
    auth: false,
    handler: async function(request, h) {
      try {
        const pin = await db.pinStore.addPin(request.payload);
        if (pin) {
          return h.response(pin).code(201);
        }
        return Boom.badImplementation("error creating pin");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  find: {
    auth: false,
    handler: async function(request, h) {
      try {
        const pins = await db.pinStore.getAllPins();
        return pins;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  findOne: {
    auth: false,
    handler: async function (request, h) {
      try {
        const pin = await db.pinStore.getPinById(request.params.id);
        if (!pin) {
          return Boom.notFound("No Pin with this id");
        }
        return pin;
      } catch (err) {
        return Boom.serverUnavailable("No Pin with this id");
      }
    },
  },
  
  deleteAll: {
    auth: false,
    handler: async function (request, h) {
        try {
        await db.pinStore.deleteAll();
        return h.response().code(204);
        } catch (err) {
        return Boom.serverUnavailable("Database Error");
        }
    },
  },  
};