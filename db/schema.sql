DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS workouts;
DROP TABLE IF EXISTS workouts_users;
DROP TABLE IF EXISTS muscle_images;

CREATE TABLE users (
  id serial PRIMARY KEY,
  username text NOT NULL UNIQUE,
  password text NOT NULL
  name - text - NN
  weight - int
  height - int
  sex - text 
);

--thinking of removing video if <iframe> can embed in frontend
CREATE TABLE workouts (
workout_id - PK - SERIAL
name - TEXT - NN
muscle_group - text NN
description - text - NN
equipment - text - NN
video - URL - NN
reps_sets - int - NN
);

CREATE TABLE workouts_users (
  workout_id - PK - NN
  user_id - PK - NN
);

CREATE TABLE muscle_images (
  images id - PK - Serial
  name - text - NN
  image - text - NN
);

