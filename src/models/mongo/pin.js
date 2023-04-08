import Mongoose from "mongoose";
const { Schema } = Mongoose;

const pinSchema = new Schema({
  userid: String,
  name: String,
  description: String,
  lattitude: String,
  longitude: String,
});

export const Pin = Mongoose.model("Pin", pinSchema);
