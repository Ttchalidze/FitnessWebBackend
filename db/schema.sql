DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS workouts;
DROP TABLE IF EXISTS workouts_users;
DROP TABLE IF EXISTS muscle_images;


CREATE TABLE users (
 id serial PRIMARY KEY,
 username text NOT NULL UNIQUE,
 password text NOT NULL
 name - text - NOT NULL
 weight - int
 height - int
 sex - text
);


--thinking of removing video if <iframe> can embed in frontend
CREATE TABLE workouts (
workout_id - PK - SERIAL
name - TEXT - NOT NULL
muscle_group - text NOT NULL
description - text - NOT NULL
equipment - text - NOT NULL
video - URL - NOT NULL
reps_sets - int - NOT NULL
);


CREATE TABLE workouts_users (
 workout_id - PK - NOT NULL
 user_id - PK - NOT NULL
);


CREATE TABLE muscle_images (
 images id - PK - Serial
 name - text - NOT NULL
 image - text - NOT NULL
);
