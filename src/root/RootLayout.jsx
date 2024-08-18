import { useUser } from "../context/UserContext";

const RootLayout = () => {
  console.log(useUser());
  return <h1>Dashboard</h1>;
};

export default RootLayout;
