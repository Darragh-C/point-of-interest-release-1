// import { userMemStore } from "./mem/user-mem-store.js";
// import { pinMemStore } from "./mem/pin-mem-store.js";

import { userJsonStore } from "./json/user-json-store.js";
import { pinJsonStore } from "./json/pin-json-store.js";
import { categoryJsonStore } from "./json/category-json-store.js";

export const db = {
  userStore: null,
  pinStore: null,
  categoryStore: null,
  

  init() {
    this.userStore = userJsonStore;
    this.pinStore = pinJsonStore;
    this.categoryStore = categoryJsonStore;
  },
};