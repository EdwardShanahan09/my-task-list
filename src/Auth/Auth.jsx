import { Outlet } from "react-router-dom";
import HeroImage from "../components/HeroImage/HeroImage";

const Auth = () => {
  return (
    <div className="lg:grid grid-cols-2">
      <div className="hidden lg:block h-screen">
        <HeroImage />
      </div>
      <div className="flex justify-center items-center h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
