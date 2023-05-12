import { Button } from "@chakra-ui/react";

type AuthButtonProps = {};

const AuthButton: React.FC<AuthButtonProps> = () => {
  return (
    <>
      <Button
        variant="outline"
        height="28px"
        width={{ base: "70px", md: "110px" }}
        mr={2}
        display={{ base: "none", sm: "flex" }}
      >
        Log In
      </Button>
      <Button
        height="28px"
        width={{ base: "70px", md: "110px" }}
        mr={2}
        display={{ base: "none", sm: "flex" }}
      >
        Sign Up
      </Button>
    </>
  );
};

export default AuthButton;
