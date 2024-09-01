import { useState } from "react";
import Form from "../../components/Form/Form";
import InputField from "../../components/InputField/InputField";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { loginWithEmail } from "../../lib/auth/auth";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { setCurrentUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const { email, password } = formFields;
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await loginWithEmail(email, password);

      setCurrentUser(user);

      navigate("/dashboard");
    } catch (error) {
      console.error(error.code);

      if (error.code === 401) {
        setErrorMessage("Error logging in, please try again.");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <Form handleSubmit={handleSubmit} title="Login">
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

      <button>Login</button>

      <p className="form__link">
        Don't have an account?{" "}
        <Link className="text-indigo-600" to="/">
          Sign Up
        </Link>
      </p>

      {errorMessage ? <p className="form__error">{errorMessage}</p> : ""}
    </Form>
  );
};

export default Login;
