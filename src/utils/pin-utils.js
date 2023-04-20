import { Pin } from "../models/mongo/pin.js";
import mongoose from 'mongoose';

export const pinUtils = {

  async getPinsIds(pins) {
    const pinIds = pins.map(pin => pin._id);
    return pinIds;
  },
  
};  