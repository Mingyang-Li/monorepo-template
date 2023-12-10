/* eslint-disable @typescript-eslint/no-explicit-any */
import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ZodObject } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodObject<any>) {}

  public transform(value: unknown) {
    const parsed = this.schema.safeParse(value);
    if (parsed.success === true) return parsed.data;
    if (parsed.success === false)
      throw new BadRequestException(
        `Failed to validate schema '${this.schema}'`,
      );
  }
}
