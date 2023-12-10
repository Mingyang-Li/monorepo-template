import { Response } from 'express';

type SendResponseArgs = {
  res: Response;
  statusCode: number;
  body?: Record<string, unknown>;
  message?: string;
};

export const sendResponse = (args: SendResponseArgs) => {
  const { res, statusCode, body, message } = args;
  res.status(statusCode).json(body ? body : message);
};
