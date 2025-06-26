import express from "express";
const router = express.Router();
export default router;
import {
  createUser,
  getUserByEmailAndPassword,
  getUsers,
} from "db/queries/users";
import requireBody from "middleware/requireBody";
import { createToken } from "utils/jwt";
import requireUser from "#middleware/requireUser";

router.route("/").get(requireUser, async (req, res) => {
  const users = await getUsers();
  res.send(users);
});
router
  .route("/")
  .post(requireBody(["firstName", "lastName", "email", "password", "age"]));

router
  .route("/register")
  .post(
    requireBody(["firstName", "lastName", "email", "password", "age"]),
    async (req, res) => {
      const { firstName, lastName, email, password, age } = req.body;
      const user = await createUser(firstName, lastName, email, password, age);
      const token = await createToken({ id: user.id });
      res.status(201).send(token);
    }
  );
router
  .route("/login")
  .post(requireBody(["email", "password"]), async (req, res) => {
    const { email, password } = req.body;
    const user = await getUserByEmailAndPassword(email, password);
    if (!user) return res.status(401).send("Invalid email or password.");

    const token = await createToken({ id: user.id });
    res.send(token);
  });
