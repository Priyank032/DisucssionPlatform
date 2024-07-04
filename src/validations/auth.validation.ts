// src/utils/validation.ts

import Joi from 'joi';

export const validateRegistration = (data: any) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    mobileNo: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

export const validateLogin = (data: any) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};
