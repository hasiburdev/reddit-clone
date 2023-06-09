import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

import { authModalState } from "@/atoms/auth-modal-atom";

import { auth } from "@/firebase/configApp";

import AuthInput from "./auth-input";
import OauthButtons from "./oauth-buttons";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [authModal, setAuthModal] = useRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);

  const handleClose = () => {
    setAuthModal((prevState) => ({ ...prevState, isOpen: false }));
  };

  useEffect(() => {
    if (user) handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  let modalTitle = "";
  if (authModal.view === "login") modalTitle = "Log In";
  else if (authModal.view === "signup") modalTitle = "Sign Up";
  else if (authModal.view === "resetPassword") modalTitle = "Reset Password";

  return (
    <>
      <Modal isOpen={authModal.isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            pb={2}
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              width="70%"
            >
              <OauthButtons />
              <Text fontSize="10pt" fontWeight={700} color="gray.500">
                OR
              </Text>
              <AuthInput />
              {/* <ResetPassword /> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
