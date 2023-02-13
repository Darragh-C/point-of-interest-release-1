import { v4 } from "uuid";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node"

const db = new Low(new JSONFile("./src/models/json/pins.json"));
db.data = { pins: [] };

export const pinJsonStore = {
    async getAllPins() {
      await db.read();
      return db.data.pins;
    },
  
    async addPin(pin) {
      await db.read();
      pin._id = v4();
      db.data.pins.push(pin);
      await db.write();
      return pin;
    },
  
    async getPinById(id) {
      await db.read();
      const list = db.data.pins.find((pin) => pin._id === id);
      return list;
    },
  
    async getUserPins(userid) {
      await db.read();
      return db.data.pins.filter((pin) => pin.userid === userid);
    },
  
    async deletePinById(id) {
      await db.read();
      const index = db.data.pins.findIndex((pin) => pin._id === id);
      db.data.pins.splice(index, 1);
      await db.write();
    },
  
    async deleteAllPins() {
      db.data.pins = [];
      await db.write();
    },
  };