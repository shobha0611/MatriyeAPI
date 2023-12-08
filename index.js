import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./app/routes.js";
import database from "./db/index.js";

const app = express();
const apiPort = 5001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
database.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", router);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
