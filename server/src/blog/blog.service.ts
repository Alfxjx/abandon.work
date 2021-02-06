import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interface';
import { Views } from './interfaces/views.interface';
import { CreatePostDTO } from './dto/create-post.dto';
import { ViewsDTO } from './dto/update-views.dto';
import { Flag } from './types/blog.types';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel('Post') private readonly postModel: Model<Post>,
    @InjectModel('Views') private readonly viewsModel: Model<Views>,
  ) {}

  private readonly logger = new Logger();

  async getPosts(query: any, flag): Promise<Post[] | any> {
    // find的第二个参数是filter是一个对象
    const posts = await this.postModel.find(query, { body: 0 });
    if (flag === Flag['true']) {
      let oldCount = await this.viewsModel.count();
      let createCount = await this.viewsModel({ count: oldCount + 1 });
      let viewCounts = await createCount.save();
      return {
        viewCounts,
        posts,
      };
    }
    return posts;
  }

  async getPost(postID, flag = Flag['true']): Promise<Post> {
    const post = await this.postModel.findById(postID).exec();
    if (flag === Flag['true']) {
      await this.postModel.findByIdAndUpdate(postID, {
        viewCount: post.viewCount ? post.viewCount + 1 : 1,
      });
    }
    return post;
  }

  async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
    const newPost = await this.postModel(createPostDTO);
    return newPost.save();
  }

  async likePost(postID) {
    const oldLikes = await this.postModel.findById(postID);
    const likePost = await this.postModel.findByIdAndUpdate(
      postID,
      { likeCount: oldLikes.likeCount + 1 },
      { new: true },
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
