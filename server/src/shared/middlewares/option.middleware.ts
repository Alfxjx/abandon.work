import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { NestMiddleware, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class OptionMiddleware implements NestMiddleware {
    constructor() { }
    private readonly logger = new Logger(OptionMiddleware.name);
    async use(req: Request, res: Response, next: NextFunction) {
        this.logger.log('option middleware')
        res.header('Access-Control-Allow-Origin", "*"')
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
        res.header("Access-Control-Allow-Credentials", "true");
        if (req.method == "OPTIONS") {
            this.logger.log('in options')
            res.send(200);
        }
        else {
            next();
        }
    }
}