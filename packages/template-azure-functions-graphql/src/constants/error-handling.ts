export const repositories = [
  'UserRepository',
  'AccountRepository',
  'TransactionRepository',
] as const;
export type TRepository = (typeof repositories)[number];

export const services = [
  'UserService',
  'AccountService',
  'TransactionService',
] as const;
export type TService = (typeof services)[number];
