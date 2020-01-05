import { Controller, Post, Res, Body, HttpStatus, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Res() res, @Body() CreateUserDTO: CreateUserDTO) {
    const newUser = await this.userService.register(CreateUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User has been submitted successfully!',
      post: newUser,
    });
  }

  @Get()
  async getUserList(@Res() res) {
    const list = await this.userService.getUserList();
    return res.status(HttpStatus.OK).json({
      list,
    });
  }
}
