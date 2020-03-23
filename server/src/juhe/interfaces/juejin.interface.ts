import { Document } from 'mongoose';

export interface Juejin extends Document {
  readonly title: string;
  readonly link: string;
  readonly likeCount: number;
  readonly tags: string[];
}
