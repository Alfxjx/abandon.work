import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async register(newUserDTO: CreateUserDTO): Promise<User> {
    //  TODO check if exist
    // const isExist = await this.userModel.find({
    //   username: newUserDTO.username,
    // });
    // if (isExist) {
    //   throw new HttpException('CONFLICT existed', HttpStatus.CONFLICT);
    // }
    const newUser = await this.userModel(newUserDTO);
    return newUser.save();
  }
  
  async login() {}

  async getUserList(){
    const list = await this.userModel.find().exec();
    return list;
  }
}
