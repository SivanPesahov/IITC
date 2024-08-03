import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import authRoute from "./routes/authRoute";
import productRoute from "./routes/productRoute";
import cartRoute from "./routes/cartRoute";

const app = express();
const PORT = process.env.PORT || 3000;

// Load config
dotenv.config();

async function main() {
  // Connect to database
  await connectDB();

  app.use(express.static("public"));

  app.use(express.json());

  app.use(cors());

  // Routes
  app.use("/api/auth", authRoute);
  app.use("/api/product", productRoute);
  app.use("/api/cart", cartRoute);

  // Catch-all route
  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

main().catch((err) => console.error(err));
