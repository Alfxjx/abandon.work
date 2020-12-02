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
  Logger,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
import { ICount } from './types/blog.types';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  private readonly logger = new Logger();

  @Get('')
  async getPosts(@Res() res, @Query() query) {
    const {flag, ...rest} = query;
    this.logger.log(`rest query: ${JSON.stringify(rest)}`);
    const posts = await this.blogService.getPosts(rest, flag);
    if (!posts) throw new NotFoundException('Posts find failed!');
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      data: posts,
    });
  }

  @Get('/:postID')
  async getPost(
    @Res() res,
    @Param('postID', new ValidateObjectId()) postID,
    @Query() query: ICount,
  ) {
    const post = await this.blogService.getPost(postID, query.flag);
    if (!post) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      data: post,
    });
  }

  @Post('/')
  async addPost(@Res() res, @Body() createPostDTO: CreatePostDTO) {
    const newPost = await this.blogService.addPost(createPostDTO);
    if (!newPost) throw new NotFoundException('创建失败');
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Post has been submitted successfully!',
      data: newPost,
    });
  }

  @Post('/like/:postID')
  async likePost(@Res() res, @Param('postID', new ValidateObjectId()) postID) {
    const likePost = await this.blogService.likePost(postID);
    if (!likePost)
      throw new NotFoundException('点赞失败，西巴，是不是哪里出了问题');
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: '点赞成功！',
      data: likePost,
    });
  }

  @Patch('/edit/:postID')
  async editPost(
    @Res() res,
    @Param('postID', new ValidateObjectId()) postID,
    @Body() createPostDTO: CreatePostDTO,
  ) {
    const editedPost = await this.blogService.editPost(postID, createPostDTO);
    if (!editedPost) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Post has been successfully updated',
      post: editedPost,
    });
  }

  @Delete('/delete/:postID')
  async deletePost(
    @Res() res,
    // TODO 改回Query
    @Param('postID', new ValidateObjectId()) postID,
  ) {
    this.logger.log(typeof postID);
    const deletedPost = await this.blogService.deletePost(postID);
    if (!deletedPost) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Post has been deleted!',
      post: deletedPost,
    });
  }
}
