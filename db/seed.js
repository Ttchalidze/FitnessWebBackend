import db from "#db/client";
import { createUser } from "#db/queries/users";
import { createWorkout } from "#db/queries/workouts";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  const workouts = [
    {
      name: "Chest",
      description:
        "Target Muscles: Upper & Lower Chest. Length: approx. 20mins. Equipment Needed: Dumbbells",
      url: "https://www.youtube.com/watch?v=cd1CjwxA918",
    },
    {
      name: "Arms",
      description:
        "Target Muscles: Biceps, Triceps, Forearms. Length: approx. 20-25mins. Equipment Needed: Dumbbells & Adjustable Bench",
      url: "https://www.youtube.com/watch?v=qiBDUtA5kPw",
    },
    {
      name: "Back",
      description:
        "Target Muscles: Upper & Lower Back. Length: approx. 20-25mins. Equipment Needed: Dumbbells & Adjustable Bench",
      url: "https://www.youtube.com/watch?v=pZ1Xzrh_els",
    },
    {
      name: "Legs",
      description:
        "Target Muscles: Quads, Glutes, Hamstrings & Calves. Length: approx. 20-25mins. Equipment Needed: Dumbbells",
      url: "https://www.youtube.com/watch?v=x5PAjQrG_UM",
    },
    {
      name: "Shoulders",
      description:
        "Target Muscles: Front, Side & Rear Delts/Shoulder. Length: approx. 20-25mins. Equipment Needed: Dumbbells & Adjustable Bench",
      url: "https://www.youtube.com/watch?v=tn2vBcwjdm0",
    },
  ];

  for (let i = 0; i < workouts.length; i++) {
    await createWorkout(
      workouts[i].name,
      workouts[i].description,
      workouts[i].url
    );
  }

  const user = await createUser(
    "firstname",
    "lastname",
    "email",
    "password",
    5
  );
}
