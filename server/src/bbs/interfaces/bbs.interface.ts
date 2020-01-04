import { Document } from 'mongoose';

export interface BBS extends Document {
  message: String;
  author: String;
  date_posted: String;
}
