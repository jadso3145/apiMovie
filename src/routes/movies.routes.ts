import { Router } from "express";
import { allMovies } from "../controllers/allMovies.controller";
import { getMovie } from "../controllers/getMovie.controller";
import { createMovies } from "../controllers/movie.controller";
import { validator } from "../middlewares/movies.middleware";
import { moviesSchema } from "../zodSchema/movies.schema";

const router = Router();

router.get("/allmovies", allMovies);
router.post("/allmovies", validator(moviesSchema), createMovies);
router.get("/allmovies/:id", getMovie);

export default router;
