import { useState } from "react";
import InputField from "../../components/InputField/InputField";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h2 className="font-bold text-lg mb-2 md:mb-4 md:text-3xl">Sign Up</h2>
      <form>
        <InputField
          labelId="displayId"
          labelName="Name"
          type="text"
          name="displayName"
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
    </div>
  );
};

export default SignUp;
