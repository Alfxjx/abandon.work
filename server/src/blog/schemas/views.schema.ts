import * as mongoose from 'mongoose';

export const ViewsSchema = new mongoose.Schema(
  {
    count: Number,
  },
  {
    timestamps: {
      createdAt: 'created_at',
    },
  },
);
