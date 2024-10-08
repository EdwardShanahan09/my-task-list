import { Outlet, Navigate } from "react-router-dom";
import HeroImage from "../components/HeroImage/HeroImage";
import HeroText from "../components/HeroText/HeroText";
import "./Auth.scss";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Auth = () => {
  const { currentUser } = useContext(UserContext);
  const isAuthenticated = currentUser;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/dashboard" />
      ) : (
        <div className="auth">
          <div className="auth__img">
            <HeroImage />
          </div>
          <div className="auth__content">
            <HeroText />
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
