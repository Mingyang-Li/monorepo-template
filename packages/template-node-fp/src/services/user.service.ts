import { ok, err } from 'neverthrow';
import { CreateUserReqBody } from '../controllers/user.controller';
import * as UserRepository from '../repositories/user.repository';

/**
 * This function is for demo-purpose only
 * @returns
 */
export const createUser = async (args: CreateUserReqBody) => {
  const res = await UserRepository.createUser(args);
  if (res.isErr()) {
    return err(res.error);
  }
  return ok(res.value);
};
