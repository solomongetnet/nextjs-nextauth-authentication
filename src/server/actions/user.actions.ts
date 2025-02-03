"use server";

import prisma from "../config/prisma";

// Create a new user
export async function createUser(name: string, email: string) {
  try {
    const user = await prisma.user.create({
      data: { name, email },
    });
    return { success: true, user };
  } catch (error: unknown) {
    console.log(error);
    return { success: false, error: "Failed to create user." };
  }
}

// Fetch all users
export async function getAllUsers() {
  const users = await prisma.user.findMany();
  return { success: true, users };
}
