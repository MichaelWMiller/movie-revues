var router = require("express").Router();
var Movies = require("../models/myMovie")

//GET ALL MOVIES
router.get("/api/mymovies", (req, res, next) => {

    Movies.find()
        .then(posts => {
            return res.send(posts);
        })
        .catch(next);
});

//GET A MOVIE BY ID
router.get("/api/mymovies/:title", (req, res, next) => {
    Movies.find({ title: req.params.title })
        .then(movies => {
            return res.send(movies);
        })
        .catch(next);
});

// CREATE A MOVIE
router.post("/api/mymovies", (req, res, next) => {
    Movies.create(req.body)
        .then(movie => {
            return res.send(movie);
        })
        .catch(next);
});

module.exports = { router }