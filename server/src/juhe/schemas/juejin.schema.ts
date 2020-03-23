import * as mongoose from 'mongoose';

export const JuejinSchema = new mongoose.Schema({
  link: String,
  title: String,
  likeCount: Number,
  tags: Array,
});
