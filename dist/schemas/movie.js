"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const movieSchema = new mongoose_2.Schema({
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
const Movie = mongoose_1.default.model("Movie", movieSchema);
exports.default = Movie;
