import { useNavigate } from "react-router-dom";
import { logoutUser } from "../lib/appwrite";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
const RootLayout = () => {
  const navigate = useNavigate();
  const setCurrentUser = useContext(UserContext);

  const handleLogout = () => {
    logoutUser();

    setCurrentUser(null);

    navigate("/");
  };

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>LogOut</button>
    </>
  );
};

export default RootLayout;
