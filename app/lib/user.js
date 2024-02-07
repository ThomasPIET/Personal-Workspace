import { db } from "./db";
import bcrypt from "bcrypt";

export async function createUser(first_name, last_name, email, password) {
  const hashedPassword = await hashPassword(password);

  const existingUser = await db.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }
  try {
    const user = await db.user.create({
      data: {
        firstName: first_name,
        lastName: last_name,
        email: email,
        password: hashedPassword,
      },
    });
    // implémenter jwt ou mise en cache
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error);
    throw error;
  }
}

async function hashPassword(password) {
  const saltRounds = 10;

  try {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  } catch (err) {
    console.error("Erreur lors du hashage du mot de passe:", err);
    throw err;
  }
}

async function checkPassword(password, hashedPassword) {
  try {
    return await bcrypt.compare(password, hashedPassword); // true or false
  } catch (err) {
    console.error("Erreur lors de la vérification du mot de passe:", err);
    throw err;
  }
}
