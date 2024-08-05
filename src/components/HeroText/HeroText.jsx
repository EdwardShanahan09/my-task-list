import Logo from "../../assets/icons/logo.svg";

const HeroText = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center items-center mb-2 md:mb-4">
        <img
          className="h-8 w-8 md:h-12 md:w-12"
          src={Logo}
          alt="My Task List Logo"
        />
      </div>
      <h1 className="font-bold text-2xl mb-2 md:mb-4 md:text-4xl">
        My Task List
      </h1>
      <p className="text-sm italic">Keep track of your daily tasks!</p>
    </div>
  );
};

export default HeroText;
