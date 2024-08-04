import { Outlet } from "react-router-dom";
import HeroImage from "../components/HeroImage/HeroImage";

const Auth = () => {
  return (
    <div className="lg:grid grid-cols-2">
      <div className="hidden lg:block h-screen">
        <HeroImage />
      </div>
      <Outlet />
    </div>
  );
};

export default Auth;
