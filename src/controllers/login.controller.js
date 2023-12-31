const { userService } = require('../services');
require('dotenv/config');
const { createToken } = require('../auth/authFunctions');

const isBodyValid = (email, password) => email && password;

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await userService.getByEmail(email);

    if (!user || password !== user.password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
console.log(user, 'LOGINCONTROLLER_USER');
    const { password: _, ...userWithoutPassword } = user.dataValues;

    const token = createToken(userWithoutPassword);
    res.status(200).send({ token });
  } catch (err) {
     return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

module.exports = {
  loginUser,
};