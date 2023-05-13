import { Button, Flex, Image, Text } from "@chakra-ui/react";

type OauthButtonsProps = {};

const OauthButtons: React.FC<OauthButtonsProps> = () => {
  return (
    <Flex direction="column" width="100%" mb={4} gap={2}>
      <Button variant="oauth" height="36px">
        <Flex align="center" justify="center" py={4}>
          <Image height="28px" mr={2} src="/images/google-logo.png" />
          <Text fontSize="10pt">Continue with Google</Text>
        </Flex>
      </Button>
      <Button variant="oauth" height="36px">
        <Flex align="center" justify="center" py={4}>
          <Image height="28px" mr={2} src="/images/google-logo.png" />
          <Text fontSize="10pt">Continue with GitHub</Text>
        </Flex>
      </Button>
    </Flex>
  );
};

export default OauthButtons;
