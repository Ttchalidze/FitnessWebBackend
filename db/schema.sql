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
  id serial PRIMARY KEY,

);

--thinking of removing video if <iframe> can embed in frontend
CREATE TABLE workouts (
workout_id SERIAL PRIMARY KEY, 
name text NOT NULL, 
muscle_group text NOT NULL,
description text NOT NULL,
video URL NOT NULL,
);

CREATE TABLE workouts_users (
  workout_id integer NOT NULL,
  user_id integer NOT NULL,
  PRIMARY KEY (workout_id, user_id),
  FOREIGN KEY (workout_id) REFERENCES workouts(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE muscle_images (
  images_id SERIAL PRIMARY KEY,
  workout_id integer NOT NULL,
  name text NOT NULL,
  image NOT NULL
);

