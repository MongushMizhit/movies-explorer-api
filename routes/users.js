const express = require('express');
const { updateUserValidation } = require('../errors/validation');
const {
  getCurrentUser, updateUser,
} = require('../controllers/users');

const router = express.Router();

router.get('/me', getCurrentUser);
router.patch('/me', updateUserValidation, updateUser);

module.exports = router;
