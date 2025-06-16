import db from "db/client";

export async function createMuscleImages(image_id, name, image){
    const sql = `
    INSERT INTO muscle_images
    (image_id, name, image)
    VALUES
    ($1, $2, $3)
    RETURNING *
    `;
    const {
        rows: [muscleImages]
    } = await db.query(sql, [image_id, name, image]);
    return muscleImages;
}

export async function getMuscleImages(){
    const sql = `
    SELECT *  
    FROM muscle_images
    `;
    const {
        rows: [muscleImages]
    } = await db.query(sql);
    return muscleImages;
}

export async function getMuscleImageById(id){
    const sql = `
    SELECT * 
    FROM muscle_images
    WHERE id = images_id
    `;
    const {
        rows: [muscleImage]
    } = await db.query(sql, [id])
    return muscleImage;
}

export async function getGetMuscleImageByWorkoutId(id){
const sql = `
SELECT * 
FROM muscle_images
WHERE id = workout_id
`;
const {
    rows: [muscleImg]
} = await db.query(sql, [id]);
return muscleImg;
}