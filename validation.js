const Joi = require("joi");

// Register Validation User
const regUserValid = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(body);
};

// Login Validation User
const logUserValid = (body) => {
  const schema = Joi.object({
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(body);
};

module.exports.regUserValid = regUserValid;
module.exports.logUserValid = logUserValid;
