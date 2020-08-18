import { Document } from 'mongoose';

export interface Bing extends Document {
  readonly date: string;
  readonly link: string;
  readonly copyright: string;
  likes: number;
}
