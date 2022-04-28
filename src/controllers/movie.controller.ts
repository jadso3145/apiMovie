import { Request, Response } from "express";
import Movie from "../schemas/movie";

export const createMovies = async (req: Request, res: Response) => {
   try {
      const { title, year, rating, genres } = req.body;
      const allMovies = new Movie({ title, year, rating, genres });
      allMovies.save();
   } catch (error: any) {
      res.status(400).json({
         error: error.message,
      });
   }
   return res.json({ message: "Movie created successfully" });
};
