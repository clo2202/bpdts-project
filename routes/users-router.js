const express = require("express");
const userRouter = express.Router();
const {
  getUsersByLocation,
} = require("../controllers/users-controller");

userRouter.route("/:city").get(getUsersByLocation);

module.exports = { userRouter };
