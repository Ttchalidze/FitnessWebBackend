import db from "db/client";

export async function createUserWorkout(workout_id, user_id) {
  const sql = `
    INSERT INTO workouts_users
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

export async function getUserWorkoutById(workoutId, userId) {
  const sql = `
    SELECT workouts.* FROM workouts
      JOIN user_workouts ON workouts.id = user_workouts.workout_id
    WHERE workouts.id = $1 AND user_workouts.user_id = $2
    `;
  const {
    rows: [workout],
  } = await db.query(sql, [workoutId, userId]);
  return workout;
}
