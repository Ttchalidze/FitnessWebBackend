import express from "express";
const router = express.Router();
export default router;

import { getWorkoutsByUserId } from "#db/queries/workouts";
import { createUserWorkout } from "#db/queries/workouts_user";
import requireUser from "#middleware/requireUser";

router.get("/", requireUser, async (req, res, next) => {
  try {
    const workouts = await getWorkoutsByUserId(req.user.id);
    res.send(workouts);
  } catch (err) {
    next(err);
  }
});

router.post("/:workout_id", requireUser, async (req, res, next) => {
  try {
    const userWorkout = await createUserWorkout(
      req.params.workout_id,
      req.user.id
    );
    res.status(201).send(userWorkout);
  } catch (err) {
    next(err);
  }
});
