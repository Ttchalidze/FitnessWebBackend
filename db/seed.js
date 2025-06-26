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
      url: "https://www.youtube.com/embed/cd1CjwxA918?si=gTyf51ow32c8gCvj",
    },
    {
      name: "Arms",
      description:
        "Target Muscles: Biceps, Triceps, Forearms. Length: approx. 20-25mins. Equipment Needed: Dumbbells & Adjustable Bench",
      url: "https://www.youtube.com/embed/qiBDUtA5kPw?si=UuppQXuiADtIGAQy",
    },
    {
      name: "Back",
      description:
        "Target Muscles: Upper & Lower Back. Length: approx. 20-25mins. Equipment Needed: Dumbbells & Adjustable Bench",
      url: "https://www.youtube.com/embed/pZ1Xzrh_els?si=72ve4ioyKJ9PQEGj",
    },
    {
      name: "Legs",
      description:
        "Target Muscles: Quads, Glutes, Hamstrings & Calves. Length: approx. 20-25mins. Equipment Needed: Dumbbells",
      url: "https://www.youtube.com/embed/x5PAjQrG_UM?si=qyo4maITyZPIcOu6",
    },
    {
      name: "Shoulders",
      description:
        "Target Muscles: Front, Side & Rear Delts/Shoulder. Length: approx. 20-25mins. Equipment Needed: Dumbbells & Adjustable Bench",
      url: "https://www.youtube.com/embed/tn2vBcwjdm0?si=8seX9gtHTDFyKf5e",
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
