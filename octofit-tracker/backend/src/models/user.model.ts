import { Schema, model } from 'mongoose';

export interface User {
  name: string;
  email: string;
  createdAt: Date;
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

export const UserModel = model<User>('User', userSchema);
