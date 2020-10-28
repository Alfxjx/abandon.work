import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { NestMiddleware, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { BlogService } from "./blog.service";
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CallMiddleware implements NestMiddleware {
    constructor(private readonly blogService: BlogService){}
    private readonly logger = new Logger(CallMiddleware.name);
    async use(req: any, res: Response, next: NextFunction){
        next()
    }
}
