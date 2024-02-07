const express = require('express');
const { movieCreateValidation, movieDeleteValidation } = require('../errors/validation');
const { getMovie, createMovie, deleteMovie } = require('../controllers/movies');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth, getMovie);
router.post('/', auth, movieCreateValidation, createMovie);
router.delete('/:movieId', auth, movieDeleteValidation, deleteMovie);

module.exports = router;
