import AvatarIcon from "../../assets/icons/avatar.svg";
import TodayIcon from "../../assets/icons/today-icon.svg";
import TodaysIcon from "../../assets/icons/all-icon.svg";
import CategoryIcon from "../../assets/icons/category-icon.svg";
import SignoutIcon from "../../assets/icons/sign-out-icon.svg";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={AvatarIcon} alt="Avatar Icon" />

        <div>Profile Name</div>

        <div>Progress Bar</div>
      </div>

      <ul>
        <li>
          <a href="#">
            <img src={TodayIcon} alt="Avatar Icon" />
            <span className="">Today's Todos</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={TodayIcon} alt="Today's Icon" />
            <span className="">All Todos</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={CategoryIcon} alt="Category Icons" />
            <span className="">Categories</span>
          </a>
        </li>
      </ul>
      <div>
        <button>
          <img src={SignoutIcon} alt="Signout Icon" />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
