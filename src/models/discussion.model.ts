// src/models/discussion.model.ts

import mongoose, { Schema, Document } from 'mongoose';

export interface Discussion extends Document {
  text: string;
  image?: string;
  hashtags: string[];
  createdBy: string;
  createdAt: Date;
}

const DiscussionSchema: Schema = new Schema({
  text: { type: String, required: true },
  image: { type: String },
  hashtags: [{ type: String }],
  createdBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<Discussion>('Discussion', DiscussionSchema);
