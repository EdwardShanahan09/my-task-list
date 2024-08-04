import { Route, Routes } from "react-router-dom";
import Auth from "./Auth/Auth";
import SignUp from "./Auth/SignUp/SignUp";
import Login from "./Auth/Login/Login";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
