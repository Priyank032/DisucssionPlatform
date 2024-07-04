// src/models/user.model.ts

import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  name: string;
  mobileNo: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  mobileNo: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model<User>('User', UserSchema);
