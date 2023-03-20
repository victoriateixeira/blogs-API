const express = require('express');

const { userController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();
router.post('/', userController.createUser);
router.get('/', validateToken, userController.getAllUsers);
router.get('/:id', validateToken, userController.getById);
router.delete('/me', validateToken, userController.deleteUserMe);
module.exports = router;