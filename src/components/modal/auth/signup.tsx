import { Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import type { ChangeEvent } from "react";

import { useSetAuthModalRecoil } from "@/hooks/recoil";

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const setAuthModal = useSetAuthModalRecoil();

  const handleSubmit = () => {};

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeAuthModal = () =>
    setAuthModal((prevState) => ({ ...prevState, view: "login" }));

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="email"
        placeholder="Email"
        type="email"
        mb={2}
        value={signUpForm.email}
        required
        onChange={handleChange}
        fontSize="10pt"
        bg="gray.50"
        _placeholder={{
          color: "gray.500",
        }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <Input
        name="password"
        required
        placeholder="Password"
        type="password"
        value={signUpForm.password}
        onChange={handleChange}
        fontSize="10pt"
        mb={2}
        bg="gray.50"
        _placeholder={{
          color: "gray.500",
        }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <Input
        name="confirmPassword"
        required
        placeholder="Confirm Password"
        type="password"
        value={signUpForm.confirmPassword}
        onChange={handleChange}
        fontSize="10pt"
        bg="gray.50"
        _placeholder={{
          color: "gray.500",
        }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <Button width="100%" my={2} type="submit">
        Sign Up
      </Button>
      <Flex justify="center" fontSize="9pt">
        <Text mr={1}>Already have an account?</Text>
        <Text
          cursor="pointer"
          textTransform="uppercase"
          fontWeight={700}
          color="blue.500"
          onClick={handleChangeAuthModal}
        >
          Log In
        </Text>
      </Flex>
    </form>
  );
};

export default SignUp;
