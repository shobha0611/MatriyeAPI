const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const apiPort = 5001;
const db = require("./db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
db.on("error", console.error.bind(console, "MongoDB connection error:"));
const routers = require("./app/routes");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", routers);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
