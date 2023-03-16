const Joi = require('joi');

const displayNameSchema = Joi.string().min(8).required();
const emailSchema = Joi.string().email().required();
const passwordSchema = Joi.string().min(6).required();

module.exports = {
  displayNameSchema, 
  emailSchema, 
  passwordSchema,
};