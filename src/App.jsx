import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import Auth from "./Auth/Auth";
import SignUp from "./Auth/SignUp/SignUp";
import Login from "./Auth/Login/Login";
import RootLayout from "./root/RootLayout";
import "./App.css";
import { UserContext } from "./context/UserContext";
import Categories from "./root/Categories/Categories";

function App() {
  const { currentUser } = useContext(UserContext);

  const isAuthenticated = currentUser;
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route
          path="/dashboard"
          element={isAuthenticated ? <RootLayout /> : <Navigate to="/" />}
        >
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
