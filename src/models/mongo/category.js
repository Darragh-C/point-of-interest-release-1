import Mongoose from "mongoose";
const { Schema } = Mongoose;

const categorySchema = new Schema({
  category: String,
  pinId: {
    type: Schema.Types.ObjectId,
    ref: "Pin",
  },
});

export const Category = Mongoose.model("Category", categorySchema);
