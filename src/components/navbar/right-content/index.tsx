import { Button, Flex } from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";

import AuthModal from "@/components/modal/auth";

import { auth } from "@/firebase/configApp";

import AuthButton from "./auth-button";

type RightContentProps = {
  user: User | null | undefined;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? (
          <Button onClick={() => signOut(auth)}>Sign Out</Button>
        ) : (
          <AuthButton />
        )}
      </Flex>
    </>
  );
};

export default RightContent;
