const { celebrate, Joi } = require('celebrate');
const { URL_EXP } = require('../constants/constants');
const { EMAIL_EXP } = require('../constants/constants');

const updateUserValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().pattern(EMAIL_EXP),
    name: Joi.string().min(2).max(30).required(),
  }),
});

const signinValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const signupValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().required().min(2).max(30),
  }),
});

const movieCreateValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(URL_EXP),
    trailerLink: Joi.string().required().pattern(URL_EXP),
    thumbnail: Joi.string().required().pattern(URL_EXP),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const movieDeleteValidation = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24).required(),
  }),
});

module.exports = {
  updateUserValidation,
  signinValidation,
  signupValidation,
  movieCreateValidation,
  movieDeleteValidation,
};
