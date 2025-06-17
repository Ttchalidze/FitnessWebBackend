import db from "db/client";




export async function createWorkout(workout_id, name, muscle_group, description, video,){
   const sql = `
   INSERT INTO orders
   (workout_id, name, muscle_group, description, video)
   VALUES
   ($1, $2, $3, $$, $5)
   RETURNING *
   `;
   const {
       rows: [workout]
   } = await db.query(sql, [workout_id, name, muscle_group, description, video]);
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
