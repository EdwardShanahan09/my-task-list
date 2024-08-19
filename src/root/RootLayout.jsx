import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
const RootLayout = () => {
  const user = useUser();
  const navigate = useNavigate();

  const { logout } = user;
  console.log(useUser());

  const handleLogout = () => {
    logout();

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
