import { Account, Client, ID, Databases, Permission, Role } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_SET_PROJECT_URL);

export const database = new Databases(client);

export const account = new Account(client);

export const id = ID;

export { Permission, Role };
