import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validate = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map(err => err.message);
      res.status(400).json({ status: false, message: errors });
    } else {
      next();
    }
  };
};

export const validateQuery = (schema: Joi.ObjectSchema) => {
  console.log("kokokokko")
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.query, { abortEarly: false });

    if (error) {
      console.log(error, "kokokokko")
      const errors = error.details.map(err => err.message);
      res.status(400).json({ status: false, message: errors });
    } else {
      console.log("kokokokko2")
      next();
    }
  };
};
