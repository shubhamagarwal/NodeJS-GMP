import Joi from 'joi';

const PWD_REGEX = /^[a-zA-Z0-9]{3,30}$/;
const userSchema = Joi.object({
    id: Joi.string().required(),
    login: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string()
      .regex(PWD_REGEX)
      .required(),
    isDeleted: Joi.bool().required(),
    age: Joi.number().integer().min(4).max(130).required(),
  });

  export default userSchema;