import { Document } from 'mongoose';

export interface Post extends Document {
  readonly title: string;
  readonly description: string;
  readonly tags: string;
  readonly body: string;
  readonly author: string;
  readonly date_posted: string;
  readonly picture: string;
  readonly promote: boolean;
  readonly category: string;
  readonly viewCount: number;
  readonly likeCount: number;
}
