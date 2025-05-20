import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));


router.get("/", (req, res) => res.send('<p>express html</p>'));

api.use("/api/", router);

export default serverless(api);

export const config = {
  name: "server handler",
  generator: "express",
  path: "/*",
  nodeBundler: "none",
  includedFiles: ["**"],
  preferStatic: true,
};