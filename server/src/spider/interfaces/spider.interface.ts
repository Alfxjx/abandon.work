import { Document } from 'mongoose';

export interface Juejin extends Document {
  readonly title: string;
  readonly link: string;
  readonly likeCounts: number;
  readonly tags: string[];
}

// TODO
export interface GitHub extends Document {}

export interface LeetCode extends Document {}
