import Mongoose from "mongoose";
const { Schema } = Mongoose;

const pinSchema = new Schema({
  name: String,
  description: String,
  lattitude: String,
  longitude: String,
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Pin = Mongoose.model("Pin", pinSchema);
