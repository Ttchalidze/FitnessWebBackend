import db from "db/client";

export async function createUserWorkout(workout_id, user_id){
    const sql = `
    INSERT INTO workouts_users
    (workout_id, user_id)
    VALUES
    ($1, $2)
    RETURNING *
    `;
    const {
        rows: [userWorkout]
    } = await db.query(sql, [workout_id, user_id]);
    return userWorkout;
}