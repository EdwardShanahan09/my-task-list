import Logo from "../../assets/icons/logo.svg";

const HeroText = () => {
  return (
    <div className="text-center">
      <img src={Logo} alt="My Task List Logo" height={50} width={50} />
      <h1>My Task List</h1>
      <p>Keep track of your daily tasks!</p>
    </div>
  );
};

export default HeroText;
