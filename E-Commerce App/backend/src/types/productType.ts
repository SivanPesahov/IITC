import { Document } from "mongoose";

export interface IProduct extends Document {
  name: String;
  price: Number;
  category: String;
}
