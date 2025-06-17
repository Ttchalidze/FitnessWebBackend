import express from "express";
const router = express.Router();
export default router;

import { createWorkout, getWorkoutById, getWorkoutByUserId } from "db/queries/workouts";
// import { createUserWorkout } from "db/queries/workouts_user";
import requireUser from "middleware/requireUser";
import requireBody from "middleware/requireBody";

router.use(requireUser); 
 
// returns all workouts belonging to the currently logged in user 

 router 
 .route("/")
 .get(async (req, res) => {
    const workouts = await getWorkoutByUserId(req.user.id);
    res.send(workouts);
 })
// insures the request body has the requirerd fields
// creates a workout associated witht the current user

 .post(requireBody(["name", "muscle_group", "description", "video"]), async (req, res) => {
    const { name, muscle_group, description, video } = req.body;
    const workout = await createWorkout(name, muscle_group, description, equipment, video, reps_sets, req.user.id);
    res.status(201).send(workout);
 });
 // runs for any route with :id in the path
 // verifies if it exists and belongs to the user

 router.param("id", async (req, res, next, id) => {
    const workout = await getWorkoutById(id);
    if (!workout) return res.status(404).send("workout not found");
    if (workout.user_id !== req.user.id) return res.status(403).send("you are unauthorized to access this workout");
    req.workout = workout;
    next();
 });

 router
 .route("/:id")
.get(async (req, res) => {
    res.send(req.workout)
});

// router
//  .route("/:id/workouts")
// .post(async (req, res) => {
//     if (!req.body) return res.status(400).send("request body required");

//     const { userId } = req.body;
//     if (!userId) return res.status(400).send("request body requires: userId");

//     const userWorkout = await createUserWorkout(req.user.id, userId);
//     res.status(201).send(userWorkout);
// });

