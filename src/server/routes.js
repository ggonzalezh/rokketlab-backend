const { Router } = require('express');
const { getMovieById, getAllMovies, insertMovie, deleteMovie, modifyMovie } = require('../controller/movies');

const router = new Router();
router.get('/movie/search/:id', getMovieById);
router.get('/movie/getAll', getAllMovies);
router.post('/movie/insert', insertMovie);
router.delete('/movie/delete/:id', deleteMovie);
router.patch('/movie/update/:id', modifyMovie);

module.exports = router;