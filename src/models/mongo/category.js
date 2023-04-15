import Mongoose from "mongoose";
const { Schema } = Mongoose;

const categorySchema = new Schema({
  pinId: String,
  category: String,
});

export const Category = Mongoose.model("Category", categorySchema);
