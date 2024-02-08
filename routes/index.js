const router = require('express').Router();
const { signinValidation, signupValidation } = require('../errors/validation');
const auth = require('../middlewares/auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const { login } = require('../controllers/users');
const { createUser } = require('../controllers/users');
const NotFoundError = require('../errors/not-found-err');

router.post('/signin', signinValidation, login);
router.post('/signup', signupValidation, createUser);

router.use(auth);

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

router.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
