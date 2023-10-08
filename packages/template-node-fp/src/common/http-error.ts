import { Response } from "express";
import { StatusCodes } from 'http-status-codes';

type SendResponseArgs = {
  res: Response;
  statusCode: number;
  message: string;
}

export const sendResponse = (args: SendResponseArgs) => {
  const { res, statusCode, message } = args;
  res.status(statusCode).json({ message })
}
