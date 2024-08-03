import { Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}
