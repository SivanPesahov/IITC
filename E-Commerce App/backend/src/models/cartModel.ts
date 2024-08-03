import { Schema, model } from "mongoose";
import { ICart } from "../types/cartType";

const cartSchema = new Schema<ICart>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Cart = model<ICart>("Cart", cartSchema);
export default Cart;
