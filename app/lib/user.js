import { db } from "./db";

export async function createUser(first_name, last_name, email, password) {



  const user = await db.user.create({
    data: {
      firstName: first_name,
      lastName: last_name,
      email: email,
      password: password,
    },
  });
}
