import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
export const UserContext = createContext();
import { ID } from "appwrite";

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const loggedIn = await account.createEmailPasswordSession(email, password);
    setUser(loggedIn);
  };

  const register = async (email, password, name) => {
    await account.create(ID.unique(), email, password, name);

    await login(email, password);
  };

  const init = async () => {
    try {
      const loggedIn = await account.get();

      setUser(loggedIn);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const value = { current: user, login, register };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
