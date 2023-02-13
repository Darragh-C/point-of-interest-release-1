import Joi from "joi";

export const UserSpec = {
  firstName: Joi.string().required().max(3),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};
