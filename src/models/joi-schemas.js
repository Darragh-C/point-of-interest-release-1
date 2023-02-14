import Joi from "joi";

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const UserCredentialsSpec = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const PinSpec = {
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  lattitude: Joi.string().optional(),
  longitude: Joi.string().optional(),
};
