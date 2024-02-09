const mongoose = require('mongoose');
const { EMAIL_EXP } = require('../constants/constants');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => EMAIL_EXP.test(email),
      message: 'Неправильно указан email',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);
