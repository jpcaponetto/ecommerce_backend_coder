import { Router } from "express";

const testRouter = Router();

testRouter.get("/testartillery", (req, res, next) => {
  for (let i = 0; i < 5e8; i++) {
    i += 1;
  }
  res.status(200).json("OK");
});

export default testRouter;
