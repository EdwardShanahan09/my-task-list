import { createContext, useEffect, useState } from "react";
// import { init } from "../lib/appwrite";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = { currentUser, setCurrentUser };

  // try {
  //   const loggedIn = init();

  //   setCurrentUser(loggedIn);
  // } catch (error) {
  //   console.log(error);
  //   setCurrentUser(null);
  // }

  // useEffect(() => {
  //   init()
  // })

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
