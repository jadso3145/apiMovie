"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URI = `mongodb+srv://jadso:jadso-dataBD@cluster0.rdve9.mongodb.net/testByMyself`;
const connection = mongoose_1.default
    .connect(URI)
    .then(() => console.log("Connected to MongoDB 😎😎"))
    .catch((err) => console.log(err));
