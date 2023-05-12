import { Button } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

import { authModalState } from "@/atoms/auth-modal-atom";

type AuthButtonProps = {};

const AuthButton: React.FC<AuthButtonProps> = () => {
  const setAuthModal = useSetRecoilState(authModalState);

  return (
    <>
      <Button
        variant="outline"
        height="28px"
        width={{ base: "70px", md: "110px" }}
        mr={2}
        display={{ base: "none", sm: "flex" }}
        onClick={() => setAuthModal(() => ({ isOpen: true, view: "login" }))}
      >
        Log In
      </Button>
      <Button
        height="28px"
        width={{ base: "70px", md: "110px" }}
        mr={2}
        display={{ base: "none", sm: "flex" }}
        onClick={() => setAuthModal(() => ({ isOpen: true, view: "signup" }))}
      >
        Sign Up
      </Button>
    </>
  );
};

export default AuthButton;
