import { Document, Types } from "mongoose";

export interface ICart extends Document {
  user: Types.ObjectId;
  products: Types.ObjectId[];
}
