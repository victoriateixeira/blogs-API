const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'SecretFiller';

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const createToken = (data) => jwt.sign({ data }, secret, JWT_CONFIG);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { createToken, verifyToken };