import db from "#db/client";

export async function getAllWorkouts() {
  const sql = `
   SELECT *
   FROM workouts
   `;
  const { rows } = await db.query(sql);
  return rows;
}
export async function createWorkout(name, description, video) {
  const sql = `
   INSERT INTO workouts
   ( name,  description, video)
   VALUES
   ($1, $2, $3)
   RETURNING *
   `;
  const {
    rows: [workout],
  } = await db.query(sql, [name, description, video]);
  return workout;
}

export async function getWorkoutsById(id) {
  const sql = `
SELECT *
FROM workouts
WHERE id = $1
`;
  const {
    rows: [workout],
  } = await db.query(sql, [id]);
  return workout;
}
