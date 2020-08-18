import * as mongoose from 'mongoose';

export const BingSchema = new mongoose.Schema({
  date: String,
  link: String,
  copyright: String,
  likes: Number,
});
