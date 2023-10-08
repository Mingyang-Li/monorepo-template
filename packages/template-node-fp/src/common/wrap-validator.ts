import { RequestHandler } from 'express';
import { ZodSchema } from 'zod';

type EventContext<Body, QueryStringParameters, PathParameters, Auth> = {
  body: Body;
  queryStringParameters: QueryStringParameters;
  pathParameters: PathParameters;
} & (Auth extends true ? { userId: string } : Record<string, never>);

export type APIGatewayEvent<Body, QueryStringParameters, PathParameters, Auth> =
  EventContext<Body, QueryStringParameters, PathParameters, Auth>;

export type InferOptionalType<T extends ZodSchema<any, any> | undefined> =
  T extends undefined ? never : ZodSchema<Exclude<T, undefined>>;

export const wrapHandlerWithValidation =
  <
    BodySchema extends ZodSchema<any, any> | undefined = undefined,
    QuerySchema extends ZodSchema<any, any> | undefined = undefined,
    ParamsSchema extends ZodSchema<any, any> | undefined = undefined,
    Auth extends boolean | undefined = true,
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
    isAuthEnabled?: Auth;
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
      req.query = await querySchema.parse(req.query);
      req.body = await bodySchema.parse(req.body);
      req.params = await pathSchema.parse(req.params);
    } catch (error) {
      const body = (error as any).errors.join(', ');
      res.status(400).json(body);
      return next(error);
    }

    try {
      handler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
