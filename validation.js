const Joi = require("joi");

// Register Validation User
const regUserValid = (body) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    phone: Joi.string().required().label("Phone Number").min(8).max(15),
    password: Joi.string().required().label("Password").min(6),
    findUs: Joi.string().required().label("Where did you find us?"),
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
