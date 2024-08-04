import HeroImg from "../../assets/images/hero.png";

const HeroImage = () => {
  return (
    <>
      <img
        className="h-screen object-cover"
        src={HeroImg}
        alt="Man sitting at computer"
      />
    </>
  );
};

export default HeroImage;
