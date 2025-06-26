import express from "express";
const router = express.Router();
export default router;
import {
  createUser,
  getUserByEmailAndPassword,
  getUsers,
  updateUser,
} from "#db/queries/users";
import requireBody from "#middleware/requireBody";
import { createToken } from "#utils/jwt";
import requireUser from "#middleware/requireUser";

router.get("/", requireUser, async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

router.put(
  "/:id",
  requireUser,
  requireBody(["firstName", "lastName", "email", "age"]),
  async (req, res) => {
    const { firstName, lastName, email, age } = req.body;
    const user = await updateUser(
      req.params.id,
      firstName,
      lastName,
      email,
      age
    );
    if (!user) return res.status(404).send("User not found.");
    res.send(user);
  }
);

router.post(
  "/register",
  requireBody(["firstName", "lastName", "email", "password", "age"]),
  async (req, res) => {
    const { firstName, lastName, email, password, age } = req.body;
    const user = await createUser(firstName, lastName, email, password, age);
    const token = await createToken({ id: user.id });
    res.status(201).send(token);
  }
);

router.post("/login", requireBody(["email", "password"]), async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmailAndPassword(email, password);
  if (!user) return res.status(401).send("Invalid email or password.");

  const token = await createToken({ id: user.id });
  res.send(token);
});
