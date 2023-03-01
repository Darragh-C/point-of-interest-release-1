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
      let p = db.data.pins.find((pin) => pin._id === id);
      if (p === undefined) p = null;
      return p;
    },
  
    async getUserPins(userid) {
      await db.read();
      return db.data.pins.filter((pin) => pin.userid === userid);
    },
  
    async deletePinById(id) {
      await db.read();
      const index = db.data.pins.findIndex((pin) => pin._id === id);
      if (index !== -1) db.data.pins.splice(index, 1);
      await db.write();
    },
  
    async deleteAllPins() {
      db.data.pins = [];
      await db.write();
    },

    async addDescTag(pinId, tag) {
      await db.read();
      const pin = this.getPinById(pinId)

      let isLocked = false;
      try {
        pin.description = tag;
      await db.write();
      } catch (error) {
        isLocked = true;
      }

      if (isLocked) {
        console.log('Database file is locked.');
      } else {
        console.log('Database file is not locked.');
      } 
      
    },

    async addLattTag(pinId, tag) {
      await db.read();
      const pin = this.getPinById(pinId)

      let isLocked = false;
      try {
        pin.lattitude = tag;
        await db.write();
      } catch (error) {
        isLocked = true;
      }

      if (isLocked) {
        console.log('Database file is locked.');
      } else {
        console.log('Database file is not locked.');
      } 
    },

    async addLongTag(pinId, tag) {
      await db.read();
      const pin = this.getPinById(pinId)

      let isLocked = false;
      try {
        pin.longitude = tag;
      await db.write();
      } catch (error) {
        isLocked = true;
      }

      if (isLocked) {
        console.log('Database file is locked.');
      } else {
        console.log('Database file is not locked.');
      } 
      
    },

    async updatePin(pin, updatedPin) {
      pin.description = updatedPin.description;
      pin.lattitude = updatedPin.lattitude;
      pin.longitude = updatedPin.longitude;
      await db.write();
    },
  };