import { useNavigate } from "react-router-dom";
import { logoutUser } from "../lib/auth/auth";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import Navbar from "./Navbar/Navbar";

const RootLayout = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Navbar />
      <div className="flex-grow p-4 md:ml-20">
        {" "}
        {/* Adjusted to account for navbar width on large screens */}
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default RootLayout;
