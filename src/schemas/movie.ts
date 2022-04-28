import mongoose from "mongoose";
import { Schema } from "mongoose";

const movieSchema = new Schema({
   id: {
      type: Number,
      trim: true,
   },
   title: {
      type: String,
      required: true,
      trim: true,
   },
   year: {
      type: Number,
      required: true,
      trim: true,
   },
   rating: {
      type: Number,
      min: 1,
      trim: true,
   },
   genres: {
      type: [String],
      trim: true,
   },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
