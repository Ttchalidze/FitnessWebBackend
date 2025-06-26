import express from "express";
const router = express.Router();
export default router;

import {
  createUserWorkout,
  getUserWorkoutByIds,
  deleteUserWorkout,
} from "#db/queries/workouts_user";
import requireUser from "#middleware/requireUser";

router.get(`/`, requireUser, async (req, res, next) => {
  try {
    const workouts = await getUserWorkoutByIds(req.user.id);
    res.send(workouts);
  } catch (err) {
    next(err);
  }
});

router.post("/", requireUser, async (req, res, next) => {
  try {
    const userWorkout = await createUserWorkout(
      req.body.workout_id,
      req.user.id
    );
    res.status(201).send(userWorkout);
  } catch (err) {
    next(err);
  }
});

router.delete("/:workout_id", requireUser, async (req, res, next) => {
  try {
    const userWorkout = await deleteUserWorkout(
      req.params.workout_id,
      req.user.id
    );
    if (!userWorkout)
      return res.status(404).send("Workout not found in user's list.");
    res.send(userWorkout);
  } catch (err) {
    next(err);
  }
});
