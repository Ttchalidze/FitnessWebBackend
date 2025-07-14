import db from "#db/client";

export async function createUserWorkout(workout_id, user_id) {
  const sql = `
    INSERT INTO user_workouts
    (workout_id, user_id)
    VALUES
    ($1, $2)
    RETURNING *
    `;
  const {
    rows: [userWorkout],
  } = await db.query(sql, [workout_id, user_id]);
  return userWorkout;
}

export async function getUserWorkoutByIds(user_id) {
  const sql = `
    SELECT workouts.*
    FROM workouts
    JOIN user_workouts ON workouts.id = user_workouts.workout_id
    WHERE user_workouts.user_id = $1 
  `;
  const { rows } = await db.query(sql, [user_id]);
  return rows;
}
export async function deleteUserWorkout(workout_id, user_id) {
  const sql = `
    DELETE FROM user_workouts
    WHERE workout_id = $1 AND user_id = $2
    RETURNING *
    `;
  const {
    rows: [userWorkout],
  } = await db.query(sql, [workout_id, user_id]);
  return userWorkout;
}
