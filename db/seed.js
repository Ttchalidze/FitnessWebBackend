import db from "#db/client";
import { createUser } from "#db/queries/users";
import { createWorkout } from "./queries/workouts";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  const workouts = [
    { name: "name", description: "description", url: "url" },
    { name: "name", description: "description", url: "url" },
    { name: "name", description: "description", url: "url" },
    { name: "name", description: "description", url: "url" },
    { name: "name", description: "description", url: "url" },
  ];
  for (let i = 1; i < workouts.length; i++) {
    await createWorkout(
      workouts[i].name,
      workouts[i].description,
      workouts[i].url
    );
  }

  const user = await createUser("name", "lastname", "email", "password", "age");
}
