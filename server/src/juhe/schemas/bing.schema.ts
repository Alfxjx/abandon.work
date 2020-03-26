import * as mongoose from 'mongoose';

export const BingSchema = new mongoose.Schema({
  date: String,
  link: String,
  likes: Number,
});
