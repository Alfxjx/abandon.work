import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  tags: String,
  body: String,
  date_posted: String,
  picture: String,
  promote: Boolean,
});
