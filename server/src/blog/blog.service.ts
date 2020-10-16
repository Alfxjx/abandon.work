import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async getPosts(query: any): Promise<Post[]> {
    // TODO find的第二个参数是filter是一个对象,
    const posts = await this.postModel.find(query, { body: 0 });
    return posts;
  }

  async getPost(postID): Promise<Post> {
    const post = await this.postModel
      // 不显示description了
      .findById(postID, { description: 0 })
      .exec();
    const cnt = await this.postModel.findByIdAndUpdate(postID, {
      viewCount: post.viewCount + 1,
    });
    post.viewCount += 1;
    return post;
  }

  async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
    const newPost = await this.postModel(createPostDTO);
    return newPost.save();
  }

  async likePost(postID){
    const oldLikes = await this.postModel.findById(postID);
    const likePost = await this.postModel.findByIdAndUpdate(
      postID,
      {likeCount: oldLikes.likeCount + 1},
      {new: true}
    );
    return likePost;
  }

  async editPost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
    const editedPost = await this.postModel.findByIdAndUpdate(
      postID,
      createPostDTO,
      { new: true },
    );
    return editedPost;
  }

  async deletePost(postID): Promise<any> {
    const deletedPost = await this.postModel.findByIdAndRemove(postID);
    return deletedPost;
  }
}
