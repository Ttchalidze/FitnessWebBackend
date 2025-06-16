import express from "express";
const router = express.Router();
export default router;
import { createMuscleImages, getGetMuscleImageByWorkoutId } from "db/queries/muscle_imgs";
import { getMuscleImageById } from "db/queries/muscle_imgs";
router
.route("/")
.get(async (req, res) => {
    const muscleImg = await getGetMuscleImageByWorkoutId(req.workout.id);
    res.send(muscleImg);
})
.post(requireBody(["name", "image"]), async (req, res) => {
const { name, image } = req.body;
const Img = await createMuscleImages(name, image, req.workout.id);
res.status(201).send(Img);
});

router
.param("id", async (req, res, next, id)  => {
    const IdMuscle = await getMuscleImageById(id);
    if (!IdMuscle) return res.status(404).send("muscle image not found");
    req.IdMuscle = IdMuscle;
    next();
});

router
.route("/:id")
.get(async (req,res) => {
    res.send(req.IdMuscle);
});