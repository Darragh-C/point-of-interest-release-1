import { v4 } from "uuid";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node"

const db = new Low(new JSONFile("./src/models/json/categories.json"));
db.data = { categories: [] };

export const categoryJsonStore = {
    async getAllCategories() {
      await db.read();
      return db.data.categories;
    },
  
    async addCategory(category) {
      await db.read();
      category._id = v4();
      db.data.categories.push(category);
      await db.write();
      return category;
    },
  
    async getCategoryById(id) {
      await db.read();
      let c = db.data.categories.find((category) => category._id === id);
      if (c === undefined) c = null;
      return c;
    },
  
    async getPinCategories(pinid) {
      await db.read();
      let c = db.data.categories.filter((category) => category.pinId === pinid);
      if (c === undefined) c = null;
      return c;
    },
  
    async deleteCategoryById(id) {
      await db.read();
      const index = db.data.categories.findIndex((category) => category._id === id);
      if (index !== -1) db.data.categories.splice(index, 1);
      await db.write();
    },
  
    async deleteAllCategories() {
      db.data.categories = [];
      await db.write();
    },
     
};