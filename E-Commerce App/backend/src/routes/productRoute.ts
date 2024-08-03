import express from "express";
import { getProducts, getProductById } from "../controllers/productController";

const router = express.Router();

// Define your routes
router.get("/", getProducts);
router.get("/:productId", getProductById);

export default router;
