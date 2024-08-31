import { useState, useContext } from "react";
import "./SignUp.scss";
import InputField from "../../components/InputField/InputField";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { signupWithEmail } from "../../lib/auth/auth";
import Form from "../../components/Form/Form";

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
  const { setCurrentUser } = useContext(UserContext);
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
      const user = await signupWithEmail(email, password, username);

      setCurrentUser(user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form title="Signup">
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

        <button>Sign Up</button>

        <p className="signup__link">
          Have an account? <Link to="/login">Log In</Link>
        </p>
        {errorMessage ? <p>{errorMessage}</p> : " "}
      </Form>
    </div>
  );
};

export default SignUp;
