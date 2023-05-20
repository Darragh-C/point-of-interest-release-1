import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
    firstName: Joi.string().example("Homer").required(),
    lastName: Joi.string().example("Simpson").required(),
  })
  .label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
    _id: IdSpec,
    __v: Joi.number(),
  }).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const PinSpec = Joi.object()
  .keys({
    name: Joi.string().example("Springfield").optional(),
    description: Joi.string().example("Middle American town").optional(),
    lattitude: Joi.string().example("56.23").optional(),
    longitude: Joi.string().example("23.44").optional(),
    userid: IdSpec,
    img: Joi.string().example("your-image-url").optional(),
  })
  .label("Pin");

export const PinSpecPlus = PinSpec.keys({
    _id: IdSpec,
    __v: Joi.number(),
  }).label("PinSpecPlus");

export const PinArraySpec = Joi.array().items(PinSpecPlus).label("PinArray");

export const CategorySpec = Joi.object()
  .keys({
    category: Joi.string().example("Road side").required(),
    pinId: IdSpec,
    _id: IdSpec,
    __v: Joi.number(),
  })
  .label("Category");

export const CategorySpecPlus = CategorySpec.keys({
    _id: IdSpec,
    __v: Joi.number(),
  }).label("CategoryPlus");

export const CategoryArraySpec = Joi.array().items(CategorySpecPlus).label("CategoryArray");

export const JwtAuth = Joi.object()
  .keys({
    success: Joi.boolean().example("true").required(),
    token: Joi.string().example("eyJhbGciOiJND.g5YmJisIjoiaGYwNTNjAOhE.gCWGmY5-YigQw0DCBo").required(),
  })
  .label("JwtAuth");