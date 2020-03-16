import * as mongoose from 'mongoose';

export const JuejinLikes = new mongoose.Schema({
  title: String,
  link: String,
  likeCounts: Number,
  tags: [String],
});

// TODO
export const GitHubProfile = new mongoose.Schema({});
// TODO
export const LeetCodeProfile = new mongoose.Schema({});
