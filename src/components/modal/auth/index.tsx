import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import { authModalState } from "@/atoms/auth-modal-atom";

import AuthInput from "./auth-input";
import OauthButtons from "./oauth-buttons";
import ResetPassword from "./reset-password";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [authModal, setAuthModal] = useRecoilState(authModalState);

  const handleClose = () => {
    setAuthModal((prevState) => ({ ...prevState, isOpen: false }));
  };

  let modalTitle = "";
  if (authModal.view === "login") modalTitle = "Log In";
  else if (authModal.view === "signup") modalTitle = "Sign Up";
  else if (authModal.view === "resetPassword") modalTitle = "Reset Password";

  return (
    <>
      <Modal isOpen={authModal.isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              width="70%"
              border="1px solid red"
            >
              <OauthButtons />
              <AuthInput />
              <ResetPassword />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
