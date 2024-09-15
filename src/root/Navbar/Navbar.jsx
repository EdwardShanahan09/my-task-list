import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { logoutUser } from "../../lib/auth/auth";
import "./Navbar.scss";
import AvatarIcon from "../../assets/icons/avatar.svg";
import TodayIcon from "../../assets/icons/today-icon.svg";
import AllIcon from "../../assets/icons/all-icon.svg";
import CategoryIcon from "../../assets/icons/category-icon.svg";
import SignoutIcon from "../../assets/icons/sign-out-icon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrentUser } = useContext(UserContext);

  const logout = () => {
    logoutUser();
    setCurrentUser(false);
  };

  return (
    <nav className="navbar">
      {/* Desktop Menu */}
      <div className="navbar__container">
        <div className="navbar__profile">
          <img className="" src={AvatarIcon} alt="Avatar Icon" />
        </div>

        <ul className="navbar__list">
          <li>
            <a href="#">
              <img src={TodayIcon} alt="Today's Todos Icon" />
              <span>Today's Todos</span>{" "}
            </a>
          </li>
          <li>
            <a href="#">
              <img src={AllIcon} alt="All Todos Icon" />
              <span>All Todos</span>
            </a>
          </li>
          <li>
            <Link to="categories">
              <img src={CategoryIcon} alt="Categories Icon" />
              <span>Categories</span>
            </Link>
          </li>
        </ul>

        <div onClick={logout} className="navbar__logout">
          <img className="w-5" src={SignoutIcon} alt="Signout Icon" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="navbar__mobile">
        <ul className="navbar__mobile-list">
          <li className="navbar__mobile-item">
            <a className="navbar__mobile-link" href="">
              <img
                className="navbar__mobile-icon"
                src={AvatarIcon}
                alt="Avatar Icon"
              />
            </a>
          </li>
          <li className="navbar__mobile-item">
            <a className="navbar__mobile-link" href="#">
              <img
                className="navbar__mobile-icon"
                src={TodayIcon}
                alt="Today's Todos Icon"
              />
            </a>
          </li>
          <li className="navbar__mobile-item">
            <a className="navbar__mobile-link" href="#">
              <img
                className="navbar__mobile-icon"
                src={AllIcon}
                alt="All Todos Icon"
              />
            </a>
          </li>
          <li className="navbar__mobile-item">
            <Link to="categories" className="navbar__mobile-link" href="#">
              <img
                className="navbar__mobile-icon"
                src={CategoryIcon}
                alt="Categories Icon"
              />
            </Link>
          </li>
          <li className="navbar__mobile-item">
            <a className="navbar__mobile-link" href="#" onClick={logout}>
              <img
                className="navbar__mobile-icon"
                src={SignoutIcon}
                alt="Signout Icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
