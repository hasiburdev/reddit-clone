import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import { authModalState } from "@/atoms/auth-modal-atom";

import Login from "./login";
import SignUp from "./signup";

type AuthInputProps = {};

const AuthInput: React.FC<AuthInputProps> = () => {
  const authModal = useRecoilValue(authModalState);

  let authComponent;
  if (authModal.view === "login") authComponent = <Login />;
  else if (authModal.view === "signup") authComponent = <SignUp />;

  return (
    <Flex direction="column" align="center" mt={4} width="100%">
      {authComponent}
    </Flex>
  );
};

export default AuthInput;
