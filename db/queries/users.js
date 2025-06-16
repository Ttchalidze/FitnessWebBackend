import db from "db/client";
import bcrypt from "bcrypt";

export async function createUser(
  username,
  password,
  name,
  weight,
  height,
  sex
) {
  const sql = `
  INSERT INTO users
    (username, password, name, weight, height, sex)
  VALUES
    ($1, $2, ,$3, $4, $5, $6)
  RETURNING *
  `;
  const hashedPassword = await bcrypt.hash(password, 10);
  const {
    rows: [user],
  } = await db.query(sql, [
    username,
    hashedPassword,
    name,
    weight,
    height,
    sex,
  ]);
  return user;
}

export async function getUserByUsernameAndPassword(username, password) {
  const sql = `
  SELECT *
  FROM users
  WHERE username = $1
  `;
  const {
    rows: [user],
  } = await db.query(sql, [username]);
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;

  return user;
}

export async function getUserById(id) {
  const sql = `
  SELECT *
  FROM users
  WHERE id = $1
  `;
  const {
    rows: [user],
  } = await db.query(sql, [id]);
  return user;
}
// do we need to add 'getUserByName' function if we made 'name'
// column NN?
