import "./RootLayout.scss";
import Navbar from "./Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <div className="">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default RootLayout;
