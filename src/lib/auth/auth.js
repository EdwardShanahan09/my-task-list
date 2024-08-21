import { account, id } from "../config";

export const loginWithEmail = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error) {
    console.error("Login faild:");

    throw error;
  }
};

export const signupWithEmail = async (email, password, name) => {
  try {
    await account.create(id.unique(), email, password, name);

    const user = await loginWithEmail(email, password);

    return user;
  } catch (error) {
    console.error("Sign Up:", error);

    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await account.deleteSession("current");
  } catch (error) {
    console.log("Logout failded", error);

    throw error;
  }
};

export const getUser = async () => {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    console.error("No user is logged in:", error);
    return null;
  }
};
