"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesSchema = void 0;
const zod_1 = require("zod");
exports.moviesSchema = zod_1.z.object({
    id: zod_1.z.number().nonnegative(),
    title: zod_1.z.string().nonempty(),
    year: zod_1.z.number().nonnegative(),
    rating: zod_1.z.number().optional(),
    genres: zod_1.z.array(zod_1.z.string()).optional(),
});
