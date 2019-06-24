import { Router } from "express";

const routers = new Router();

routers.get("/", (req, res, next) => {
  return res.json({ status: "Api On" });
});

export default routers;
