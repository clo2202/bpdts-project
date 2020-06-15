const express = require("express");
const app = express();
const { userRouter } = require('./routes/users-router');

app.use("/users", userRouter);

module.exports = { app };
