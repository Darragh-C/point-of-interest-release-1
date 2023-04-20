import { Category } from "./category.js";
import { Pin } from "./pin.js";

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

  async getPinCategories(pinid) {
    const pinCategories = Category.find({ pinId: pinid }).lean();
    return pinCategories;
  },

  async getPinCategoriesDistinct(pins) {
    const distCat = Category.aggregate([
      { 
        $match : { 
          pinId: { 
            $in: pins
          }
        }
      },
      { 
        $group : { 
          _id: "$category",  
        } 
      }, 
      { $project: { 
          category: "$_id", 
          _id:0 
        }
      }
    ]);
    if (distCat === undefined) distCat = null;
    return distCat;
  },

  async getDistinctCategories() {
    const distCat = Category.aggregate([
      { 
        $group : { 
          _id: "$category",  
        } 
      }, 
      { $project: { 
          category: "$_id", 
          _id:0 
        }
      }
    ]);
    if (distCat === undefined) distCat = null;
    return distCat;
  },

  async filterCategoryObjs(category) {
    if (category) {
      const categoryObjs = await Category.find( { category: category } ).lean();
      if (categoryObjs) {
        return categoryObjs;
      } else {
        return null;
      }
    }
    return null;
  },
  
  async addCategory(pinId, category) {
    category.pinId = pinId;
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