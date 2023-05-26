import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { CategoryArraySpec, IdSpec, CategorySpec, CategorySpecPlus } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";

export const categoryApi = {
  find: {
    auth: false,
    /*
    auth: {
      strategy: "jwt",
    },
    */
    handler: async function (request, h) {
      try {
        const categories = await db.categoryStore.getAllCategories();
        return categories;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Get all categories",
    notes: "Creates a category with the categoryApi",
    response: { schema: CategoryArraySpec, failAction: validationError },
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
        const category = await db.categoryStore.getCategoryById(request.params.id);
        if (!category) {
          return Boom.notFound("No category with this id");
        }
        return category;
      } catch (err) {
        return Boom.serverUnavailable("No category with this id");
      }
    },
    tags: ["api"],
    description: "Get category",
    notes: "Gets a category with the categoryApi when you pass its id",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: CategorySpecPlus, failAction: validationError },
  },

  create: {
    auth: false,
    /*
    auth: {
      strategy: "jwt",
    },
    */
    handler: async function (request, h) {
      try {
        const category = await db.categoryStore.addCategory(request.params.id, request.payload);
        if (category) {
          return h.response(category).code(201);
        }
        return Boom.badImplementation("error creating category");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Create category",
    notes: "Creates a category with the categoryApi",
    validate: { payload: CategorySpec, failAction: validationError },
    response: { schema: CategorySpecPlus, failAction: validationError },
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
        await db.categoryStore.deleteAllCategories();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all categories",
    notes: "Deletes all categories with the categoryApi",
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
        const category = await db.categoryStore.getCategoryById(request.params.id);
        if (!category) {
          return Boom.notFound("No Category with this id");
        }
        await db.categoryStore.deleteCategoryById(category._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No Category with this id");
      }
    },
    tags: ["api"],
    description: "Deletes a Category",
    notes: "Deletes a Category when you pass its id",
    validate: { params: { id: IdSpec }, failAction: validationError },
  },
};
