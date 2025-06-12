import express from "express";
const router = express.Router();
export default router;

import { getImages, getImageById } from "#db/queries/images";

router.route("/").get(async (req, res) => {
  const images = await getImages();
  res.send(images);
});

router.route("/:id").get(async (req, res) => {
  const image = await getImageById(req.params.id);
  if (!image) return res.status(404).send("Image not found.");
  res.send(image);
});
