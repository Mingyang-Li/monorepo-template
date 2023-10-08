import { z } from 'zod';
import { StatusCodes } from 'http-status-codes';
import * as HTTP from '../common/http-error';
import * as UserService from '../services/user.service';
import { wrapHandlerWithValidation } from '../common/validation-wrapper';
import { Request, Response } from 'express';

export const CreateUserReqBodySchema = z.object({
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});
export type CreateUserReqBody = z.infer<typeof CreateUserReqBodySchema>;
export const createUser = wrapHandlerWithValidation({
  bodySchema: CreateUserReqBodySchema,
  handler: async (req, res) => {
    const newUser = await UserService.createUser(req.body as CreateUserReqBody);
    if (newUser.isErr()) {
      return HTTP.sendResponse({
        res,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        message: 'Failed to create user',
      });
    }
    return HTTP.sendResponse({
      res,
      statusCode: StatusCodes.CREATED,
      body: newUser,
    });
  },
});

export const createUser_test = (req: Request, res: Response) => {
  return res.status(201).json({ msg: "test" })
}
