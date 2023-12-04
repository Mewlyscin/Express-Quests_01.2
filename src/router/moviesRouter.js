const express = require("express");

const router = express.Router();

const movieControllers = require("../controllers/movieControllers");

router.get("/api/movies", movieControllers.getMovies);
router.get("/api/movies/:id", movieControllers.getMovieById);

module.exports = router;
