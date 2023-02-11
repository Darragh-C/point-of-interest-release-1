import { userMemStore } from "./mem/user-mem-store.js";
import { pinMemStore } from "./mem/pin-mem-store.js";

export const db = {
  userStore: null,
  pinStore: null,
  

  init() {
    this.userStore = userMemStore;
    this.pinStore = pinMemStore;
  },
};