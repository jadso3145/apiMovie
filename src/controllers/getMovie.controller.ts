import { Request, Response } from "express";
import Movie from "../schemas/movie";

export const getMovie = async (req: Request, res: Response) => {
   try {
      const { id } = req.params;
      const movie = await Movie.find({ id: Number(id) });
      res.json(movie);
   } catch (error: any) {
      res.status(400).json({ msg: error.message });
   }
};
