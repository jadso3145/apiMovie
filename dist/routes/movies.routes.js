"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const allMovies_controller_1 = require("../controllers/allMovies.controller");
const getMovie_controller_1 = require("../controllers/getMovie.controller");
const movie_controller_1 = require("../controllers/movie.controller");
const movies_middleware_1 = require("../middlewares/movies.middleware");
const movies_schema_1 = require("../zodSchema/movies.schema");
const router = (0, express_1.Router)();
router.get("/allmovies", allMovies_controller_1.allMovies);
router.post("/allmovies", (0, movies_middleware_1.validator)(movies_schema_1.moviesSchema), movie_controller_1.createMovies);
router.get("/allmovies/:id", getMovie_controller_1.getMovie);
exports.default = router;
