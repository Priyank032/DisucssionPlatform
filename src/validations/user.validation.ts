import Joi from 'joi';

export const registerschema = Joi.object({
  name: Joi.string().required(),
  mobileNo: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});


export const updateUserSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  mobileNo: Joi.string(),
}).min(1);

export const searchUserSchema = Joi.object({
  name: Joi.string().required()
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

