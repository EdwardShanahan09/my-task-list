import { Account, Client, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_SET_PROJECT_URL);

const account = new Account(client);

export const loginWithEmail = async (email, password) => {
  return await account.createEmailPasswordSessions(email, password);
};

export const signupWithEmail = async (email, password, name) => {
  await account.create(ID.unique(), email, password, name);

  await loginWithEmail(email, password);
};

export const logoutUser = async () => {
  await account.deleteSession("current");
};

export const init = async () => get();
