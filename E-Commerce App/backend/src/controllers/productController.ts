import { Request, Response } from "express";
import Product from "../models/productModel";

interface IQuery {
  name?: String;
}

interface ICriteria {
  [key: string]: any;
}

function makeCrateria(query: IQuery): ICriteria {
  const crateria: ICriteria = {};

  if (query.name !== undefined && query.name.trim() !== "") {
    crateria.name = { $regex: query.name, $options: "i" };
  }

  return crateria;
}

async function getProducts(req: Request, res: Response): Promise<void> {
  try {
    const {
      name,
      page = 1,
      limit = 3,
    } = req.query as unknown as { name: string; page: number; limit: number };

    const crateria = makeCrateria({ name });
    const skip = (page - 1) * limit;

    const products = await Product.find(crateria).skip(skip).limit(limit);

    const totalProducts = await Product.countDocuments(crateria);
    const totalPages = Math.ceil(totalProducts / limit);

    res.status(200).json({
      products,
      totalProducts,
      totalPages,
      currentPage: page,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function getProductById(req: Request, res: Response): Promise<void> {
  const { productId } = req.params;

  try {
    const selectedProduct = await Product.findById(productId);
    res.status(200).json(selectedProduct);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export { getProducts, getProductById };
