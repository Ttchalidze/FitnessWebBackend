DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS workouts;
DROP TABLE IF EXISTS user_workouts;
/*DROP TABLE IF EXISTS muscle_images;*/


CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 lastname TEXT NOT NULL,
 email TEXT NOT NULL,
 password TEXT NOT NULL,
 age integer NOT NULL 
);

CREATE TABLE workouts (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 description TEXT NOT NULL,
 video TEXT NOT NULL
);

CREATE TABLE user_workouts (
  workout_id integer NOT NULL,
  user_id integer NOT NULL,
  CONSTRAINT fk_workout
    FOREIGN KEY (workout_id)
    REFERENCES workouts(id),
  CONSTRAINT fk_user
    FOREIGN KEY (user_id) 
    REFERENCES users(id)
    ON DELETE CASCADE
);

/*CREATE TABLE muscle_images (
  img_id SERIAL PRIMARY KEY,
  workout_id integer NOT NULL,
  name TEXT NOT NULL,
  img_url TEXT  NOT NULL
);*/

 