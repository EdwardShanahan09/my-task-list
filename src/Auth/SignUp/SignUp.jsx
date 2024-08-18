import { useContext, useState } from "react";
import InputField from "../../components/InputField/InputField";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { registerWithEmail } from "../../lib/appwrite";

const defaultFormFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, password, confirmPassword } = formFields;
  const [errorMessage, setErrorMessage] = useState("");
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.length <= 3) {
      setErrorMessage("Username has to be 3 or more characters.");
      return;
    }

    if (password != confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password has to be 6 or more characters.");
      return;
    }

    try {
      const user = await registerWithEmail(email, password, username);

      setCurrentUser(user);
      navigate("/dashboard");

      console.log(currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-lg mb-2 md:mb-4 md:text-3xl">Sign Up</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <InputField
          labelId="usernameId"
          labelName="Username"
          type="text"
          name="username"
          onChange={handleChange}
        />

        <InputField
          labelId="email"
          labelName="Email"
          type="email"
          name="email"
          onChange={handleChange}
        />

        <InputField
          labelId="password"
          labelName="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />

        <InputField
          labelId="confirmPassword"
          labelName="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        />

        <button className="w-full py-2 px-4 mt-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
          Sign Up
        </button>
      </form>
      <p className="text-sm italic text-right mb-4">
        Have an account?{" "}
        <Link className="text-indigo-600" to="/login">
          Log In
        </Link>
      </p>
      {errorMessage ? (
        <p className="text-sm text-red-500">{errorMessage}</p>
      ) : (
        " "
      )}
    </div>
  );
};

export default SignUp;
