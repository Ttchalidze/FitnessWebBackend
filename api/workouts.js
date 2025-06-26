import express from "express";
const router = express.Router();
export default router;

import { createWorkout, getAllWorkouts } from "#db/queries/workouts";
import { getWorkoutsById } from "#db/queries/workouts";
import requireBody from "#middleware/requireBody";

router
  .route("/")
  .get(async (req, res) => {
    const workouts = await getAllWorkouts();
    res.send(workouts);
  })

  .post(requireBody(["name", "description", "video"]), async (req, res) => {
    const { name, description, video } = req.body;
    const workout = await createWorkout({
      name,
      description,
      video,
    });
    res.status(201).send(workout);
  });

router.param("id", async (req, res, next, id) => {
  const workout = await getWorkoutsById(id);

  if (!workout) return res.status(404).send("workout not found");
  req.workout = workout;
  next();
});

router.route("/:id").get(async (req, res) => {
  res.send(req.workout);
});
