const express = require('express');
const { updateUserValidation } = require('../errors/validation');
const {
  getCurrentUser, updateUser,
} = require('../controllers/users');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/me', auth, getCurrentUser);
router.patch('/me', auth, updateUserValidation, updateUser);

module.exports = router;
