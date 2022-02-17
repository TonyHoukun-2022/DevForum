const express = require("express");
const loginRouter = express.Router();
const { login } = require("../controllers/login");
loginRouter.post("", login);
loginRouter.get("", login);
module.exports = loginRouter;
