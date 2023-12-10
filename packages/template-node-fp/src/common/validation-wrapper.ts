/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';
import { ZodSchema } from 'zod';

export type InferOptionalType<T extends ZodSchema<any, any> | undefined> =
  T extends undefined ? never : ZodSchema<Exclude<T, undefined>>;

export const wrapHandlerWithValidation =
  <
    BodySchema extends ZodSchema<any, any> | undefined = undefined,
    QuerySchema extends ZodSchema<any, any> | undefined = undefined,
    ParamsSchema extends ZodSchema<any, any> | undefined = undefined,
  >({
    handler,
    querySchema,
    bodySchema,
    pathSchema,
  }: {
    handler: RequestHandler<
      InferOptionalType<ParamsSchema>,
      unknown,
      InferOptionalType<BodySchema>,
      InferOptionalType<QuerySchema>,
      { userId: string }
    >;
    querySchema?: QuerySchema;
    bodySchema?: BodySchema;
    pathSchema?: ParamsSchema;
  }): RequestHandler<
    InferOptionalType<ParamsSchema>,
    unknown,
    InferOptionalType<BodySchema>,
    InferOptionalType<QuerySchema>,
    { userId: string }
  > =>
  async (req, res, next) => {
    // Schema Validation
    try {
      if (req.query && querySchema) {
        req.query = await querySchema.parse(req.query);
      }
      if (req.body && bodySchema) {
        req.body = await bodySchema.parse(req.body);
      }
      if (req.params && pathSchema) {
        req.params = await pathSchema.parse(req.param);
      }
    } catch (error) {
      res.status(400).json(error);
      return next(error);
    }

    try {
      handler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
