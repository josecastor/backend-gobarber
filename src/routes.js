const { Router } = require("express");

const routers = new Router();

routers.get("/", (req, res, next) => {
  return res.json({ status: "Api On" });
});

module.exports = routers;
