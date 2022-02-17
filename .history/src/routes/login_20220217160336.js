const express = require("express");
const loginRouter = express.Router();
const { login, getuser } = require("../controllers/login");
loginRouter.post("", login);
loginRouter.get("", getuser);
module.exports = loginRouter;
