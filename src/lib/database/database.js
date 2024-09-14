import { database, id, Permission, Role } from "../config";
import { Query } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
const CATEGORY_COLLECTION_ID = import.meta.env.VITE_CATEGORY_COLLECTION_ID;
const TASK_COLLECTION_ID = import.meta.env.VITE_TASK_COLLECTION_ID;

export const createCategory = async (title, userId) => {
  try {
    const newCategory = await database.createDocument(
      DATABASE_ID,
      CATEGORY_COLLECTION_ID,
      id.unique(),
      { title, userId },
      [Permission.read(Role.user(userId)), Permission.write(Role.user(userId))]
    );
    return newCategory;
  } catch (error) {
    console.log("Failed to create category", error);
    throw error;
  }
};

export const listCategories = async (userId) => {
  try {
    const response = await database.listDocuments(
      DATABASE_ID,
      CATEGORY_COLLECTION_ID,
      [Query.equal("userId", userId)]
    );

    return response.documents;
  } catch (error) {
    console.error("Faild to list categories", error);
    throw error;
  }
};
