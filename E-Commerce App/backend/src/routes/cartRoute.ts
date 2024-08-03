import express from "express";
import {
  addToCart,
  removeFromCart,
  viewCart,
} from "../controllers/cartController";
import { verifyToken } from "../middleware/authMiddleware";

const router = express.Router();

// Define your routes
router.patch("/add/:productId", verifyToken, addToCart);
router.patch("/remove/:productId", verifyToken, removeFromCart);
router.get("/view", verifyToken, viewCart);

export default router;
