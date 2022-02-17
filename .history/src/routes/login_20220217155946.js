const express = require("express");
const loginRouter = express.Router();
const { login } = require("../controllers/login");
const { getuser } = require("../controllers/getuser");
loginRouter.post("", login);
loginRouter.get("", getuser);
module.exports = loginRouter;
