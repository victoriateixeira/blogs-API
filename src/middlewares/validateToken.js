// const { verifyToken } = require('../auth/authFuctions');

const { verifyToken } = require('../auth/authFunctions');
const { userService } = require('../services');

const validateToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization, 'VERIFYTOKEN');
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
//     const { data: { userId } } = verifyToken(authorization);
//     console.log(userId, 'VERIFYTOKEN_PAYLOAD');
//     const user = await userService.getById(userId);
//     if (!user) {
//       return res.status(401).json({ message: 'Expired or invalid token' });
// }
    return next();
  } catch (error) {
    res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
};

module.exports = validateToken;