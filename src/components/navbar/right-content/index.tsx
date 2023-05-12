import { Flex } from "@chakra-ui/react";

import AuthModal from "@/components/modal/auth";

import AuthButton from "./auth-button";

type RightContentProps = {};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        <AuthButton />
      </Flex>
    </>
  );
};

export default RightContent;
