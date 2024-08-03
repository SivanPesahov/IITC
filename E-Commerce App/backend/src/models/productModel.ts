import { Schema, model } from "mongoose";
import { IProduct } from "../types/productType";

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

const Product = model<IProduct>("Product", productSchema);
export default Product;
