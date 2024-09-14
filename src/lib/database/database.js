import { database, id, Permission, Role } from "../config";

const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
const CATEGORY_COLLECTION_ID = import.meta.env.VITE_CATEGORY_COLLECTION_ID;
const TASK_COLLECTION_ID = import.meta.env.VITE_TASK_COLLECTION_ID;

export const createCategory = async (title, userID) => {
  try {
    const newCategory = await database.createDocument(
      DATABASE_ID,
      CATEGORY_COLLECTION_ID,
      id.unique(),
      { title },
      [Permission.read(Role.user(userID)), Permission.write(Role.user(userID))]
    );
    return newCategory;
  } catch (error) {
    console.log("Failed to create category", error);
    throw error;
  }
};
