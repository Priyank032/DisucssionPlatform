import { Request, Response, NextFunction } from 'express';

export class APIError extends Error {
  statusCode: number;
  method: string;

  constructor(
    message = 'Error occurred',
    statusCode = 400,
    method = 'unknown'
  ) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.method = method;
    Error.captureStackTrace(this);
  }
}

export const errorMiddleware = (error: APIError, req: Request, res: Response, next: NextFunction) => {
  console.error(error); // Log the error for debugging

  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message,
  });
};

