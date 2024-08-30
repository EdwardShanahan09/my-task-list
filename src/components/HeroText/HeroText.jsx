import Logo from "../../assets/icons/logo.svg";
import "./HeroText.scss";
const HeroText = () => {
  return (
    <div className="hero-text">
      <div className="hero-text__logo">
        <img height={40} width={40} src={Logo} alt="My Task List Logo" />
      </div>
      <h1 className="hero-text__heading">My Task List</h1>
      <p className="hero-text__subtitle">Keep track of your daily tasks!</p>
    </div>
  );
};

export default HeroText;
