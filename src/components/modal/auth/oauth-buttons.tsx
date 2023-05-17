import { Button, Flex, Image, Text } from "@chakra-ui/react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { GitHubIcon } from "@/components/icons";

import { auth } from "@/firebase/configApp";
import { FIREBASE_ERRORS } from "@/firebase/errors";

type OauthButtonsProps = {};

const OauthButtons: React.FC<OauthButtonsProps> = () => {
  const [signInWithGoogle, user, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGitHub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  return (
    <Flex direction="column" width="100%" mb={4} gap={2}>
      <Button
        isLoading={googleLoading}
        variant="oauth"
        height="36px"
        onClick={() => {
          signInWithGoogle();
        }}
      >
        <Flex align="center" justify="center" py={4}>
          <Image
            height="28px"
            mr={2}
            src="/images/google-logo.png"
            alt="Login with Google"
          />
          <Text fontSize="10pt">Continue with Google</Text>
        </Flex>
      </Button>
      <Button
        variant="oauth"
        height="36px"
        isLoading={githubLoading}
        onClick={() => signInWithGitHub()}
      >
        <Flex align="center" justify="center" py={4}>
          <GitHubIcon height="28px" />
          <Text fontSize="10pt">Continue with GitHub</Text>
        </Flex>
      </Button>
      <Text color="red.500" fontSize="10pt" textAlign="center">
        {(googleError || githubError) &&
          (FIREBASE_ERRORS[
            (googleError?.code as keyof typeof FIREBASE_ERRORS) ||
              (githubError?.code as keyof typeof FIREBASE_ERRORS)
          ] ??
            "Oops! Something went wrong!")}
      </Text>
    </Flex>
  );
};

export default OauthButtons;
