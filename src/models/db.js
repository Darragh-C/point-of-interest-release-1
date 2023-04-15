import { userMemStore } from "./mem/user-mem-store.js";
import { pinMemStore } from "./mem/pin-mem-store.js";

import { userJsonStore } from "./json/user-json-store.js";
import { pinJsonStore } from "./json/pin-json-store.js";
import { categoryJsonStore } from "./json/category-json-store.js";

import { connectMongo } from "./mongo/connect.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { pinMongoStore } from "./mongo/pin-mongo-store.js";
import { categoryMongoStore } from "./mongo/category-mongo-store.js";

export const db = {
  userStore: null,
  pinStore: null,
  categoryStore: null,
  

  init() {
    this.userStore = userJsonStore;
    this.pinStore = pinJsonStore;
    this.categoryStore = categoryJsonStore;
  },
  init(storeType) {
    switch (storeType) {
      case "json":
        this.userStore = userJsonStore;
        this.pinStore = pinJsonStore;
        this.categoryStore = categoryJsonStore;
        break;
      case "mongo":
        this.userStore = userMongoStore;
        this.pinStore = pinMongoStore;
        this.categoryStore = categoryMongoStore;
        connectMongo();
        break;
      default:
        this.userStore = userMemStore;
        this.pinStore = pinMemStore;
        this.categoryStore = categoryJsonStore;
    }
  },
};