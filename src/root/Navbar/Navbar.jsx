import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { logoutUser } from "../../lib/auth/auth";
import AvatarIcon from "../../assets/icons/avatar.svg";
import TodayIcon from "../../assets/icons/today-icon.svg";
import TodaysIcon from "../../assets/icons/all-icon.svg";
import CategoryIcon from "../../assets/icons/category-icon.svg";
import SignoutIcon from "../../assets/icons/sign-out-icon.svg";

const Navbar = () => {
  const { setCurrentUser } = useContext(UserContext);

  const logout = () => {
    logoutUser();
    setCurrentUser(false);
  };

  return (
    <nav className="flex md:flex-col md:h-full md:w-20 md:fixed md:left-0 md:top-0 md:bottom-0 bg-white shadow-md fixed bottom-0 left-0 right-0 p-4">
      <div className="flex items-center justify-between md:flex-col">
        <img className="w-5 mb-4" src={AvatarIcon} alt="Avatar Icon" />
        <div className="hidden">Profile Name</div>
        <div className="hidden">Progress Bar</div>
      </div>

      <ul className="flex md:flex-col md:space-y-4 space-x-4 md:space-x-0">
        <li>
          <a href="#">
            <img className="w-5" src={TodaysIcon} alt="Today's Todos Icon" />
            <span className="hidden">Today's Todos</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img className="w-5" src={TodayIcon} alt="All Todos Icon" />
            <span className="hidden">All Todos</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img className="w-5" src={CategoryIcon} alt="Categories Icon" />
            <span className="hidden">Categories</span>
          </a>
        </li>
      </ul>

      <div className="mt-4 md:mt-auto">
        <button onClick={logout}>
          <img className="w-5" src={SignoutIcon} alt="Signout Icon" />
          <span className="hidden">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
