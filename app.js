const express = require("express");
const app = express();
const { userRouter } = require("./routes/users-router");
const endPoints = require("./endpoints.json");

app.use("/users", userRouter);

app.route("/").get((req, res, next) => {
  res.status(200).send(endPoints);
});

module.exports = { app };
