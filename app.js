const express = require("express");
const app = express();
const { userRouter } = require("./routes/users-router");

app.use("/users", userRouter);

app.get("/", (req, res, next) => {
  res.status(200).send("end points");
});

module.exports = { app };
