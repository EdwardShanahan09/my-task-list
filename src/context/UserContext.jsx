import { createContext, useEffect, useState } from "react";
import { getUser } from "../lib/auth/auth";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const initUser = async () => {
      const user = await getUser();

      setCurrentUser(user);
    };

    initUser();
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
