"use server";

import { createUser } from "../lib/user";

export async function logData(formData) {

  createUser(
    formData.get("first_name"),
    formData.get("last_name"),
    formData.get("email"),
    formData.get("password")
  );

  console.log("user created!", user);
}
