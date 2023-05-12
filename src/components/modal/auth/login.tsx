import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import type { ChangeEvent } from "react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {};

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="email"
        placeholder="Email"
        type="email"
        mb={2}
        value={loginForm.email}
        onChange={handleChange}
      />
      <Input
        name="password"
        placeholder="Password"
        type="password"
        value={loginForm.password}
        onChange={handleChange}
      />
      <Button type="submit">Log In</Button>
    </form>
  );
};

export default Login;
