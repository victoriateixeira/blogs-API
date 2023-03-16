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
    res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
const allUsers = userService.getAllUsers();
return res.status(200).json(allUsers);
};

module.exports = {
  createUser,
  getAllUsers,
};