import express, { Request, Response } from "express";

export const app = express();

type HelloQuery = {
  name: string;
};

app.get("/hello", (req: Request<{}, {}, HelloQuery>, res: Response) => {
  const { name } = req.query;

  if (!name) {
    res.status(400).json({ msg: "Bad Request." });
    return;
  }

  res.send(`Hello ${name}!`);
});

export default app;
