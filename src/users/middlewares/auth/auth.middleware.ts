import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization)
      throw new HttpException('Not authorized', HttpStatus.FORBIDDEN);

    if (authorization === '123456789') {
      next();
    } else {
      throw new HttpException('Not authorized', HttpStatus.FORBIDDEN);
    }
  }
}
