// src/services/auth.service.ts

import { Request } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User, { User as UserModel } from '../models/user.model';

export const loginUser = async (email: string, password: string): Promise<string | null> => {
  const user = await User.findOne({ email });

  if (!user) {
    return null; // User not found
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return null; // Password does not match
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
  return token;
};
