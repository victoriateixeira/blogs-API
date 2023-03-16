const { User } = require('../models');
const { validateUserData } = require('./validations/validateUserData');

const getByEmail = (email) => User.findOne({ where: { email } });

const createUser = async (userData) => {
  const { displayName, email, password, image } = userData;
  const existingEmail = await getByEmail(email); 
if (existingEmail) { return { type: 409, message: 'User already registered' }; }

const isUserDataValid = await validateUserData(userData);
if (isUserDataValid.type) { return isUserDataValid; }

const newUser = await User.create({ displayName, email, password, image });
return { type: null, message: newUser };
};

const getAllUsers = async () => User.findAll();

module.exports = {
  getByEmail,
  createUser,
  getAllUsers,
};