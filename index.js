import cors from "cors";
import express from "express";
import { initRoutes } from "./routes/routes.js";
import { router as authRouter } from "./routes/authRoutes.js";
import { router as fightRouter } from "./routes/fightRoutes.js";

import "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

app.use("/auth", authRouter);
app.use("/fights", fightRouter);

app.use("/", express.static("./client/build"));

const port = 3333;
app.listen(port, () => {});

export { app };
