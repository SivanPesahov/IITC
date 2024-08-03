import { Request, Response } from "express";
import Product from "../models/productModel";
import Cart from "../models/cartModel";
import { ICart } from "../types/cartType";
import mongoose from "mongoose";
import { IProduct } from "../types/productType";

interface RequestWithUserId extends Request {
  userId?: string | null;
}

async function addToCart(
  req: RequestWithUserId,
  res: Response
): Promise<void | Response<any, Record<string, any>>> {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).send("Invalid product ID");
  }

  const productToAdd = await Product.findById(productId);
  if (!productToAdd) {
    return res.status(404).send("Product not found");
  }

  try {
    let cart = await Cart.findOne({ user: req.userId });
    if (!cart) {
      cart = new Cart({
        user: req.userId,
        products: [new mongoose.Types.ObjectId(productId)],
      });
    } else {
      cart.products.push(new mongoose.Types.ObjectId(productId));
    }

    await cart.save();
    return res.status(200).send("Product added to cart");
  } catch (error: any) {
    console.error(error);
    return res.status(500).send("Server error");
  }
}

async function removeFromCart(
  req: RequestWithUserId,
  res: Response
): Promise<void | Response<any, Record<string, any>>> {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).send("Invalid product ID");
  }

  const cart = await Cart.findOne({ user: req.userId });
  if (!cart) {
    return res.status(404).send("Cart not found");
  }

  const initialProductCount = cart.products.length;

  // cart.products = cart.products.filter((p) => p.toString() !== productId);
  const productToRemoveIndex = cart.products.findIndex(
    (p) => p.toString() === productId
  );
  if (productToRemoveIndex === -1) {
    return res.status(404).send("Product not found in cart");
  }

  cart.products.splice(productToRemoveIndex, 1);

  if (cart.products.length === initialProductCount) {
    return res.status(404).send("Product not found in cart");
  }

  await cart.save();
  return res.status(200).send("Product removed from cart");
}

async function viewCart(
  req: RequestWithUserId,
  res: Response
): Promise<void | Response<any, Record<string, any>>> {
  const cart = await Cart.findOne({ user: req.userId });
  if (!cart) {
    return res.status(404).send("Cart not found");
  }

  const products = await Promise.all(
    cart.products.map((p) => Product.findById(p))
  );

  return res.status(200).json(products);
}

export { addToCart, removeFromCart, viewCart };
