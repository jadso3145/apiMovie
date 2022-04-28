import express from "express";
import moviesRoutes from "./routes/movies.routes";
import cors from 'cors'
import morgan from "morgan";
import path from "path";
import "./db/connect";
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", moviesRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
