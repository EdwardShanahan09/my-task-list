import { Outlet, Navigate } from "react-router-dom";
import HeroImage from "../components/HeroImage/HeroImage";
import HeroText from "../components/HeroText/HeroText";
import { useUser } from "../context/UserContext";

const Auth = () => {
  const user = useUser();

  const isAuthenticated = user.current;

  console.log(isAuthenticated);
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/dashboard" />
      ) : (
        <div className="lg:grid grid-cols-2">
          <div className="hidden lg:block h-screen">
            <HeroImage />
          </div>
          <div className="flex justify-center  w-3/5 mx-auto flex-col   h-screen">
            <HeroText />
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
