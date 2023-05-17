import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "@/firebase/configApp";

import RightContent from "./right-content";
import SearchInput from "./search-input";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image
          alt="Reddit Clone Logo"
          src="/images/redditFace.svg"
          height={30}
        />
        <Image
          alt="Reddit Clone Logo"
          src="/images/redditText.svg"
          height={46}
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchInput user={user} />
      <RightContent user={user} />
    </Flex>
  );
};

export default Navbar;
