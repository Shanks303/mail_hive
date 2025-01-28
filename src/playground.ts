import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "test@yahoo",
    firstName: "kAUSHIK",
    lastName: "kslkdskj",
  },
});

console.log("done");
