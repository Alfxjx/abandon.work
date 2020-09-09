import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import * as mongoose from 'mongoose';

@Injectable()
export class ValidateObjectId implements PipeTransform<string> {
  private readonly logger = new Logger();
  async transform(value: string, metadata: ArgumentMetadata) {
    this.logger.log(`validator: ${value}`)
    const isValid = mongoose.isValidObjectId(value);
    if (!isValid) throw new BadRequestException('Invalid ID!');
    return value;
  }
}
