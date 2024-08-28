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
    <nav className="bg-blue-500">
      {/* Desktop Menu */}
      <div className="hidden md:flex md:flex-col md:h-full md:w-20 md:fixed md:left-0 md:top-0 md:bottom-0 bg-black shadow-md p-4">
        <div className="flex flex-col items-center space-y-4">
          <img className="w-5" src={AvatarIcon} alt="Avatar Icon" />
          <div className="hidden">Profile Name</div>
          <div className="hidden">Progress Bar</div>
        </div>

        <ul className="flex-1 flex flex-col items-center justify-between space-y-4">
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

        <div className="flex justify-center mt-auto">
          <button onClick={logout}>
            <img className="w-5" src={SignoutIcon} alt="Signout Icon" />
            <span className="hidden">Logout</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="flex md:hidden fixed bottom-0 left-0 right-0 bg-purple-700 p-4">
        <ul className="flex justify-between items-center w-full space-x-4">
          <li>
            <a href="">
              <img className="w-5" src={AvatarIcon} alt="Avatar Icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="w-6" src={TodaysIcon} alt="Today's Todos Icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="w-6" src={TodayIcon} alt="All Todos Icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="w-6" src={CategoryIcon} alt="Categories Icon" />
            </a>
          </li>
          <li>
            <a href="#" onClick={logout}>
              <img className="w-6" src={SignoutIcon} alt="Signout Icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
