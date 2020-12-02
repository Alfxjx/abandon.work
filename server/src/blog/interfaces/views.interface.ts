import { Document } from 'mongoose';

export interface Views extends Document {
  readonly count: number;
}
