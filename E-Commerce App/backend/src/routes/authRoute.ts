import express from "express";
import {
  register,
  login,
  getLoggedInUser,
} from "../controllers/authController";
import { verifyToken } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/loggedInUser", verifyToken, getLoggedInUser);

export default router;
