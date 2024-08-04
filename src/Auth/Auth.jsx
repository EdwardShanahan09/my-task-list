import { Outlet } from "react-router-dom";
import Hero from "../components/Hero/Hero";

const Auth = () => {
  return (
    <>
      <Hero />
      <Outlet />
    </>
  );
};

export default Auth;
