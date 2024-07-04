import Joi from 'joi';

export const createDiscussionSchema = Joi.object({
  text: Joi.string().required(),
  image: Joi.string().optional(),
  hashtags: Joi.array().items(Joi.string()).required()
});

export const updateDiscussionSchema = Joi.object({
  text: Joi.string(),
  image: Joi.string(),
  hashtags: Joi.array().items(Joi.string())
}).min(1);
