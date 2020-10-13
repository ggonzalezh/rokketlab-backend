const { Movie } = require('../models/movie');
const { ObjectId } = require('mongoose').Types
const { logger } = require('../config/logger');

exports.getMovieById = async (req, res) => {
    try {
        let { id } = req.params;
        if (!ObjectId.isValid(id)) return res.status(500).send({ 'Error': `${id} is not a valid Mongo object` });
        return res.send(await Movie.findOne({ _id: id }).lean());
    } catch (error) {
        logger.error(error);
        return res.status(500).send({ error: error.message })
    }
}

exports.getAllMovies = async (req, res) => {
    try {
        let movies = await Movie.find({}).lean();
        return res.send(movies);
    } catch (error) {
        logger.error(error);
        return res.status(500).send({ error: error.message })
    }
}

exports.insertMovie = async (req, res) => {
    try {
        let { title, launchYear, typeMovie, gender, director, country } = req.body;
        let movie = new Movie({
            title,
            launchYear,
            typeMovie,
            gender,
            director,
            country
        });
        return res.send(await movie.save());
    } catch (error) {
        logger.error(error);
        return res.status(500).send({ error: error.message })
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        let { id } = req.params;
        if (!ObjectId.isValid(id)) return res.status(500).send({ 'Error': `${id} is not a valid Mongo object` });
        return res.send(await Movie.deleteOne({ _id: id }));
    } catch (error) {
        logger.error(error);
        return res.status(500).send({ error: error.message })
    }
}

exports.modifyMovie = async (req, res) => {
    try {
        let { id } = req.params;
        return res.send(await Movie.updateOne({ _id: id }, { $set: req.body }))
    } catch (error) {
        logger.error(error);
        return res.status(500).send({ error: error.message })
    }
}