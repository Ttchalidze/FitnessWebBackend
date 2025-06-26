import express from "express";
const app = express();
export default app;

import usersRouter from "#api/users";
import getUserFromToken from "#middleware/getUserFromToken";
import workoutsRouter from "#api/workouts";
import handlePostgresErrors from "#middleware/handlePostgresErrors";
import cors from "cors";
import morgan from "morgan";
import myworkoutsRouter from "#api/myworkouts";
app.use(cors());

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(getUserFromToken);

app.get("/", (req, res) => res.send("Hello, World!"));

app.use("/users", usersRouter);
app.use("/workouts", workoutsRouter);
app.use("/myworkouts", myworkoutsRouter);

app.use(handlePostgresErrors);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong.");
});
