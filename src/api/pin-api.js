import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { PinArraySpec, IdSpec, PinSpec, PinSpecPlus } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";
import { imageStore } from "../models/image-store.js";

export const pinApi = {
  create: {
    auth: false,
    /*
    auth: {
      strategy: "jwt",
    },
    */
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
    tags: ["api"],
    description: "Create pin",
    notes: "Creates a pin with the pinApi",
    validate: { payload: PinSpec, failAction: validationError },
    response: { schema: PinSpecPlus, failAction: validationError },
  },

  find: {
    auth: false,
    /*
    auth: {
      strategy: "jwt",
    },
    */
    handler: async function(request, h) {
      try {
        const pins = await db.pinStore.getAllPins();
        return pins;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Get pins",
    notes: "Gets alls pins with the pinApi",
    response: { schema: PinArraySpec, failAction: validationError }
  },

  findOne: {
    auth: false,
    /*
    auth: {
      strategy: "jwt",
    },
    */
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
    tags: ["api"],
    description: "Get pin",
    notes: "Gets a pin with the pinApi when you pass its id",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: PinSpecPlus, failAction: validationError },
  },

  deleteOne: {
    auth: false,
    /*
    auth: {
      strategy: "jwt",
    },
    */
    handler: async function (request, h) {
      try {
        const pin = await db.pinStore.getPinById(request.params.id);
        if (!pin) {
          return Boom.notFound("No pin with this id");
        }
        await db.pinStore.deletePinById(pin._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No pin with this id");
      }
    },
    tags: ["api"],
    description: "Deletes a pin",
    notes: "Deletes a pin when you pass its id",
    validate: { params: { id: IdSpec }, failAction: validationError },
  },
  
  deleteAll: {
    auth: false,
    /*
    auth: {
      strategy: "jwt",
    },
    */
    handler: async function (request, h) {
      try {
        await db.pinStore.deleteAll();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete pins",
    notes: "Deletes all pins with the pinApi",
  },  

  updatePin: {
    auth: false,
    /*
    auth: {
      strategy: "jwt",
    },
    */
    handler: async function (request, h) {
      try {
        const pin = await db.pinStore.updatePinProps(request.params.id, request.payload);
        if (!pin) {
          return Boom.notFound("Update error");
        }
        return pin;
      } catch (err) {
        return err;
      }
    },
    tags: ["api"],
    description: "Update pin",
    notes: "Updates a pin with the pinApi when you pass its id and your update",

  },

  pinUpdate: {
    auth: false,
    /*
    auth: {
      strategy: "jwt",
    },
    */
    handler: async function (request, h) {
      try {
        const pinToUpdate = db.pinStore.getPinById(request.params.id)
        const pin = await db.pinStore.updatePin(pinToUpdate, request.payload);
        if (!pin) {
          return Boom.notFound("Update error");
        }
        return pin;
      } catch (err) {
        return Boom.serverUnavailable("No Pin with this id");
      }
    },
    tags: ["api"],
    description: "Update pin",
    notes: "Updates a pin with the pinApi when you pass its id and your update",

  },

  uploadImage: {
    auth: false,
    /*
    auth: {
      strategy: "jwt",
    },
    */
    handler: async function (request, h) {
      const pin = await db.pinStore.getPinById(request.params.id);
      const file = request.payload.imagefile;
      
      try {
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          console.log('url:');
          console.log(url);
          pin.img = url;
          await db.pinStore.updateImage(pin);
          return url.toString();
        }
      } catch (err) {
        console.log(err);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
    tags: ["api"],
    description: "Upload an image",
    notes: "Adds an image to a pin",
  },

  removeImage: {
    auth: false,
    /*
    auth: {
      strategy: "jwt",
    },
    */
    handler: async function (request, h) {
      try {
        const pin = await db.pinStore.removeImage(request.params.id);
        if (!pin) {
          return Boom.notFound("Update error");
        }
        return h.response().code(200);
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    tags: ["api"],
    description: "Removes image",
    notes: "Removes a pin image with the pinApi when you pass its id",

  },

};