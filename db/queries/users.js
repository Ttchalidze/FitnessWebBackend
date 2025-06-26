import db from "#db/client";
import bcrypt from "bcrypt";

export async function createUser(firstName, lastName, email, password, age) {
  const sql = `
  INSERT INTO users
    (firstName, lastName, email, password, age)
  VALUES
    ($1, $2, $3, $4, $5)
  RETURNING *
  `;
  const hashedPassword = await bcrypt.hash(password, 10);
  const {
    rows: [user],
  } = await db.query(sql, [firstName, lastName, email, hashedPassword, age]);
  return user;
}

export async function getUsers() {
  const sql = `
  SELECT id, firstname, lastname, email, age FROM users`;
  const {
    rows: [users],
  } = await db.query(sql);
  return users;
}
export async function updateUser(id, firstName, lastName, email, age) {
  const sql = `UPDATE users 
  SSET firstName = $2, lastName = $3, email = $4, age = $5
  WHERE id = $1
  RETURNING *`;
  const {
    rows: [user],
  } = await db.query(sql, [id, firstName, lastName, email, age]);
}

export async function getUserByEmailAndPassword(email, password) {
  const sql = `
  SELECT *
  FROM users
  WHERE email = $1
  `;
  const {
    rows: [user],
  } = await db.query(sql, [email]);
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
