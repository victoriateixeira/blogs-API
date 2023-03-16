// const { userService } = require('..');
// const { getByEmail } = require('../user.service');
const { displayNameSchema, emailSchema, passwordSchema } = require('./schemas');

const validateUserData = async (userData) => {
  const { displayName, email, password } = userData;
  const errorName = displayNameSchema.validate(displayName);
  if (errorName.error) {
 return { type: 400, 
  message: '"displayName" length must be at least 8 characters long' }; 
}

const errorEmail = emailSchema.validate(email);
  if (errorEmail.error) { return { type: 400, message: '"email" must be a valid email' }; }

const errorPassword = passwordSchema.validate(password);
  if (errorPassword.error) {
 return { type: 400, 
  message: '"password" length must be at least 6 characters long' }; 
}
  return { type: null, message: '' };
};

module.exports = {
  validateUserData,
};