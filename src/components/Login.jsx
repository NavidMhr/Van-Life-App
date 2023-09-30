import React, { useState } from "react";

export default function Login() {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputValue)
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <form className="form-login" onSubmit={handleSubmit}>
        <h4 className="m-3">Sign In To Your Account</h4>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email Address"
          value={inputValue.email}
          onChange={handleChange}
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={inputValue.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </>
  );
}
