import { Button, Flex, Input, Text } from "@chakra-ui/react";
import type { ChangeEvent } from "react";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { useSetAuthModalRecoil } from "@/hooks/recoil";

import { auth } from "@/firebase/configApp";
import { FIREBASE_ERRORS } from "@/firebase/errors";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [loginWithEmailAndPassword, user, loading, firebaseError] =
    useSignInWithEmailAndPassword(auth);

  const setAuthModal = useSetAuthModalRecoil();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loginForm.email === "" || loginForm.password === "") return;
    loginWithEmailAndPassword(loginForm.email, loginForm.password);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeAuthModal = () =>
    setAuthModal((prevState) => ({ ...prevState, view: "signup" }));

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="email"
        placeholder="Email"
        type="email"
        mb={2}
        value={loginForm.email}
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
        value={loginForm.password}
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
      <Text color="red.500" fontSize="10pt" mt={2} textAlign="center">
        {firebaseError &&
          FIREBASE_ERRORS[firebaseError.code as keyof typeof FIREBASE_ERRORS]}
      </Text>
      <Button isLoading={loading} width="100%" my={2} type="submit">
        Log In
      </Button>
      <Flex justify="center" fontSize="9pt">
        <Text mr={1}>New here?</Text>
        <Text
          cursor="pointer"
          textTransform="uppercase"
          fontWeight={700}
          color="blue.500"
          onClick={handleChangeAuthModal}
        >
          Sign Up
        </Text>
      </Flex>
    </form>
  );
};

export default Login;
