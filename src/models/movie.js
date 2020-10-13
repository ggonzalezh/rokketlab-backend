const mongoose = require('mongoose');
const uniqueValitor = require('mongoose-unique-validator');

const Movie = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
    },
    launchYear: {
        type: Number,
        required: true,
    },
    typeMovie: {
        type: String,
        required: true,
        uppercase: true
    },
    gender: {
        type: String,
        required: true,
        uppercase: true
    },
    director: {
        type: String,
        required: true,
        uppercase: true
    },
    country: {
        type: String,
        required: true,
        uppercase: true
    },
}, {
    autoIndex: true,
    timestamps: true,
});

Movie.plugin(uniqueValitor);
exports.Movie = mongoose.model('movie', Movie);