import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => (
  <Flex bg="white" height="44px" padding="6px 12px">
    <Flex align="center">
      <Image alt="Reddit Clone Logo" src="/images/redditFace.svg" height={30} />
      <Image
        alt="Reddit Clone Logo"
        src="/images/redditText.svg"
        height={46}
        display={{ base: "none", md: "unset" }}
      />
    </Flex>
  </Flex>
);

export default Navbar;
