const express = require("express");
const loginRouter = express.Router();
const { login } = require("../controllers/login");
const { user } = require("../controllers/user");
loginRouter.post("", login);
loginRouter.get("", user);
module.exports = loginRouter;
