export class CreatePostDTO {
  readonly title: string;
  readonly description: string;
  readonly tags: string;
  readonly body: string;
  readonly author: string;
  readonly date_posted: string;
  readonly picture: string;
  readonly promote: boolean;
  viewCount: number;
  likeCount: number;
}
