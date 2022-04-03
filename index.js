const express = require("express");

const path = require("path");

const cors = require("cors");
const connect = require("./src/config/db");
const restController = require("./src/controllers/restaurants.controller");

const app = express();

app.use(cors());

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, "./frontend/public")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./frontend/build/index.html"));
// });

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./frontend/public", "index.html"));
// });

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.use("/restaurants", restController);

app.listen(process.env.PORT || 8080, async () => {
  try {
    await connect();
    console.log("listening on port 8080");
  } catch (e) {
    console.log("e:", e.message);
  }
});
