const { displayNameSchema, emailSchema, passwordSchema } = require('./schemas');

const validateUserData = (userData) => {
  const { displayName, email, password } = userData;
  const { errorName } = displayNameSchema.validate(displayName);
  if (errorName) {
 return { type: 'INVALID_VALUE', 
  message: '"displayName" length must be at least 8 characters long' }; 
}

const { errorEmail } = emailSchema.validate(email);
  if (errorEmail) return { type: 'INVALID_VALUE', message: '"email" must be a valid email' };

const { errorPassword } = passwordSchema.validate(password);
  if (errorPassword) {
 return { type: 'INVALID_VALUE', 
  message: '"password" length must be at least 6 characters long' }; 
}
return { type: null, message: '' }; 
};

module.exports = {
  validateUserData,
};