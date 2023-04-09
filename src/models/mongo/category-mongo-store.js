import { Category } from "./category.js";
import mongoose from 'mongoose';

export const categoryMongoStore = {
  async getAllCategories() {
    const categories = await Category.find().lean();
    return categories;
  },

  async getCategoryById(id) {
    if (id) {
      const category = await Category.findOne({ _id: id }).lean();
      if (category) {
        return category;
      } else {
        return null;  
      }
    }
    return null;
  },
  
  async getUserCategories(userId) {
    const categories = Category.find({ userid: userId }).lean();
    return categories;
  },

  async getPinCategories(pinid) {
    const pinCategories = Category.find({ pinId: pinid }).lean();
    return pinCategories;
  },
  
  async addCategory(category) {
    const newCategory = new Category(category);
    const categoryObj = await newCategory.save();
    const c = await this.getCategoryById(categoryObj._id);
    return c;
  },
  
  async deleteCategoryById(id) {
    try {
      await Category.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },
  
  async deleteAllCategories() {
    await Category.deleteMany({});
  },
  
};  