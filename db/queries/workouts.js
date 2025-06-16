import db from "db/client";




export async function createWorkout(workout_id, name, muscle_group, description, equipment, video, reps_sets){
   const sql = `
   INSERT INTO orders
   (workout_id, name, muscle_group, description, equipment, video, reps_sets)
   VALUES
   ($1, $2, $3, $$, $5, $6, $7)
   RETURNING *
   `;
   const {
       rows: [workout]
   } = await db.query(sql, [workout_id, name, muscle_group, description, equipment, video, reps_sets]);
   return workout;
}


export async function getWorkoutByUserId(id){
   const sql = `
   SELECT *
   FROM workouts
   WHERE user_id = $1
   `;
   const {
       rows: [workout]
   } = await db.query(sql, [id]);
   return workout;
}


export async function getWorkoutById(id){
const sql = `
SELECT *
FROM orders
WHERE id = $1
`;
const {
   rows: [workout]
} = await db.query(sql, [id]);
return workout;
}
