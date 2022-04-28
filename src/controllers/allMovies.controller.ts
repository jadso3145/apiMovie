import { Request, Response } from "express";
import Movie from "../schemas/movie";

export const allMovies = async (req: Request, res: Response) => {
   console.log(req.body);
   const movies = await Movie.find();
   return res.json(movies);
};
