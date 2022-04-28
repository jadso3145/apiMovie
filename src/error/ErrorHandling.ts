import { CustomError } from "../types/ErrorHandling";

class CustomErrorHandling implements CustomError {
   code: number;
   message: string;
   constructor(code: number, message: string) {
      this.code = code;
      this.message = message;
   }

   badRuest(data: string): CustomError {
      return new CustomErrorHandling(400, `Bad Request: ${data}`);
   }
}
