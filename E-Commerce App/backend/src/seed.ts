// seed.ts
// This script seeds the database with sample data.
// This is for development purposes only and should not be used in production.

import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import connectDB from "./config/db";

import User from "./models/userModel";
import Product from "./models/productModel";
import Cart from "./models/cartModel";

const SALT_ROUNDS = 10; // Number of rounds to generate salt. 10 is recommended value

dotenv.config(); // Load environment variables

const users = [
  {
    username: "john_doe",
    password: "password123",
    firstName: "John",
    lastName: "Doe",
  },
  {
    username: "jane_doe",
    password: "password456",
    firstName: "Jane",
    lastName: "Doe",
  },
];

const products = [
  {
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
  },
  {
    name: "Smartphone",
    price: 599.99,
    category: "Electronics",
  },
  {
    name: "Running Shoes",
    price: 89.99,
    category: "Sports",
  },
  {
    name: "Coffee Maker",
    price: 49.99,
    category: "Home Appliances",
  },
];

async function seedDB() {
  try {
    await connectDB(); // Connect to the database
    await User.deleteMany({});
    await Product.deleteMany({});
    await Cart.deleteMany({});

    // Create users
    const createdUsers = await Promise.all(
      users.map(async (u) => {
        const hashedPassword = await bcrypt.hash(u.password, SALT_ROUNDS);
        const user = new User({ ...u, password: hashedPassword });
        await user.save();
        return user;
      })
    );

    // Create products
    const createdProducts = await Product.insertMany(products);

    // Create carts for users with random products
    const carts = createdUsers.map((user) => ({
      user: user._id,
      products: [
        createdProducts[Math.floor(Math.random() * createdProducts.length)]._id,
        createdProducts[Math.floor(Math.random() * createdProducts.length)]._id,
      ],
    }));

    await Cart.insertMany(carts);

    console.log("Database seeded");
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.connection.close(); // Close the database connection
  }
}

seedDB();
