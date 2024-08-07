import { Schema, model } from "mongoose";
import { IUser } from "../types/userType";

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const User = model<IUser>("User", userSchema);
export default User;
