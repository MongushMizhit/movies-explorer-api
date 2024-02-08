const express = require('express');
const { movieCreateValidation, movieDeleteValidation } = require('../errors/validation');
const { getMovie, createMovie, deleteMovie } = require('../controllers/movies');

const router = express.Router();

router.get('/', getMovie);
router.post('/', movieCreateValidation, createMovie);
router.delete('/:movieId', movieDeleteValidation, deleteMovie);

module.exports = router;
