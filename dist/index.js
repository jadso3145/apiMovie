"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movies_routes_1 = __importDefault(require("./routes/movies.routes"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
require("./db/connect");
const app = (0, express_1.default)();
const port = 5000;
app.use(express_1.default.static(path_1.default.join(__dirname + "/public")));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use("/api", movies_routes_1.default);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
