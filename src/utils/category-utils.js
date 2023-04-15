import { Types } from "mongoose";

export const categoryUtils = {

  async getPinsIds(categories) {
    const pinIds = categories.map((category) => new Types.ObjectId(category.pinId));
    return pinIds;
  },
  
};  