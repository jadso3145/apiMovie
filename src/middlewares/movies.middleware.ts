import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

export const validator =
   (schema: AnyZodObject) =>
   (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = schema.parse(req.body);
         next();
      } catch (error) {
         if (error instanceof ZodError) {
            return res.status(400).json({
               error: error.message,
            });
         }
         res.status(400).json(error);
      }
      return console.log("first");
   };
