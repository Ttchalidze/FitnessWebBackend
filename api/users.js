import express from "express";
const router = express.Router();
export default router;

import { createUser, getUserByUsernameAndPassword } from "db/queries/users";
import requireBody from "middleware/requireBody";
import { createToken } from "utils/jwt";

router
  .route("/register")
  .post(requireBody(["username", "password", "name"]), async (req, res) => {
    const { username, password, name, weight, height, sex } = req.body;
    const user = await createUser(
      username,
      password,
      name,
      weight,
      height,
      sex
    );
    const token = await createToken({ id: user.id });
    res.status(201).send(token);
  });

router.route("/login");
//.
