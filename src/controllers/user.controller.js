const { userService } = require('../services');
const { createToken } = require('../auth/authFunctions');
const { getByEmail } = require('../services/user.service');

const createUser = async (req, res) => {
  const userData = req.body;
const newUser = await userService.createUser(userData);
if (newUser.type) { return res.status(newUser.type).json({ message: newUser.message }); }

const user = await getByEmail(userData.email);
// const user = await userService.getByEmail(userData.email);
console.log(user, 'USERCONTROLLER_USER');
const { password: _, ...userWithoutPassword } = user.dataValues;
const token = createToken(userWithoutPassword);
    res.status(201).send({ token });
};

const getAllUsers = async (_req, res) => {
const allUsers = await userService.getAllUsers();
return res.status(200).json(allUsers);
};

const getById = async (req, res) => {
const { id } = req.params;
const user = await userService.getById(id);
if (!user) {
 return res.status(404).json({
  message: 'User does not exist',
}); 
}
return res.status(200).json(user);
};

const deleteUserMe = async (req, res) => {
  const { id } = req.user;
  await userService.deleteUserMe(id);
  res.status(204).json('');
};

module.exports = {
  createUser,
  getAllUsers,
  getById,
  deleteUserMe,
};