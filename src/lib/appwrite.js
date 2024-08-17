import { Account, Client, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_SET_PROJECT_URL);

const account = new Account(client);

export const registerWithEmail = async (email, password) => {
  return await account.create(ID.unique(), email, password);
};
