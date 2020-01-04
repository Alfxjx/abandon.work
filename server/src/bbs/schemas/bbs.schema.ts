import * as mongoose from 'mongoose';

export const BBSSchema = new mongoose.Schema({
  message: String,
  author: String,
  date_posted: String,
});
