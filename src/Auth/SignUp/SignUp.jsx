import { useState } from "react";

const SignUp = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(name, email, password, confirmPassword);
  };

  return (
    <div>
      <h2 className="font-bold text-lg mb-2 md:mb-4 md:text-3xl">Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
