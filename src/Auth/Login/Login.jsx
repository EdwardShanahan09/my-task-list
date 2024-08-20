import { useState } from "react";
import InputField from "../../components/InputField/InputField";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { login } = useUser();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(email, password);

      navigate("/dashboard");
    } catch (error) {
      console.error(error.code);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-lg mb-2 md:mb-4 md:text-3xl">Login</h2>
      <form onSubmit={handleSubmit} className="mb-4">
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

        <button className="w-full py-2 px-4 mt-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
          Login
        </button>
      </form>

      <p className="text-sm italic text-right">
        Don't have an account?{" "}
        <Link className="text-indigo-600" to="/">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
