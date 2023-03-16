const { User } = require('../models');
const { validateUserData } = require('./validations/validateUserData');

const getByEmail = (email) => User.findOne({ where: { email } });

const createUser = async (userData) => {
  const { displayName, email, password, image } = userData;
const isUserDataValid = validateUserData(userData);
if (isUserDataValid.type) { return isUserDataValid; }
User.create({ displayName, email, password, image });
};

module.exports = {
  getByEmail,
  createUser,
};