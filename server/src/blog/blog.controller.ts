import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Post,
  Body,
  Query,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get('')
  async getPosts(@Res() res) {
    const posts = await this.blogService.getPosts();
    if(!posts) throw new NotFoundException('Posts find failed!');
    return res.status(HttpStatus.OK).json({
      status:HttpStatus.OK,
      data:posts
    });
  }

  @Get('/:postID')
  async getPost(@Res() res, @Param('postID', new ValidateObjectId()) postID) {
    const post = await this.blogService.getPost(postID);
    if (!post) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json({
      status:HttpStatus.OK,
      data:post
    });
  }

  @Post('/')
  async addPost(@Res() res, @Body() createPostDTO: CreatePostDTO) {
    const newPost = await this.blogService.addPost(createPostDTO);
    if(!newPost) throw new NotFoundException('创建失败');
    return res.status(HttpStatus.OK).json({
      status:HttpStatus.OK,
      message: 'Post has been submitted successfully!',
      data: newPost,
    });
  }

  @Patch('/edit')
  async editPost(
    @Res() res,
    @Query('postID', new ValidateObjectId()) postID,
    @Body() createPostDTO: CreatePostDTO,
  ) {
    const editedPost = await this.blogService.editPost(postID, createPostDTO);
    if (!editedPost) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json({
      status:HttpStatus.OK,
      message: 'Post has been successfully updated',
      post: editedPost,
    });
  }

  @Post('/delete')
  async deletePost(
    @Res() res,
    @Query('postID', new ValidateObjectId()) postID,
  ) {
    const deletedPost = await this.blogService.deletePost(postID);
    if (!deletedPost) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json({
      status:HttpStatus.OK,
      message: 'Post has been deleted!',
      post: deletedPost,
    });
  }
}
