"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
const zod_1 = require("zod");
const validator = (schema) => (req, res, next) => {
    try {
        const result = schema.parse(req.body);
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            return res.status(400).json({
                error: error.message,
            });
        }
        res.status(400).json(error);
    }
    return console.log("first");
};
exports.validator = validator;
