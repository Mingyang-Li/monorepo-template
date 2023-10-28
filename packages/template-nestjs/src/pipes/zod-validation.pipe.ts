import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ZodObject } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodObject<any>) { }

  public transform(value: unknown, metadata: ArgumentMetadata) {
    const parsed = this.schema.safeParse(value);
    if (parsed.success === true) return parsed.data;
    if (parsed.success === false) throw new BadRequestException(`Failed to validate schema 'schema'`);
  }
}
