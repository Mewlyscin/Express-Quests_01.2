const express = require("express");

const router = express.Router();

const movieControllers = require("../controllers/movieControllers");

router.get("/api/movies", movieControllers.getMovies);
router.get("/api/movies/:id", movieControllers.getMovieById);

router.post("/api/movies", movieControllers.postMovie);
router.put("/api/movies/:id", movieControllers.updateMovie);

module.exports = router;
