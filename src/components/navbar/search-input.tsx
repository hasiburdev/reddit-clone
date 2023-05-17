import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import type { User } from "firebase/auth";

type SearchInputProps = {
  user: User | null | undefined;
};

const SearchInput: React.FC<SearchInputProps> = ({ user }) => {
  return (
    <Flex flexGrow={1} mr={2} align={"center"}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" mb={1} />
        </InputLeftElement>
        <Input
          placeholder="Search anything..."
          fontSize="10pt"
          border="1px solid"
          borderColor="transparent"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            borderColor: "blue.500",
          }}
          height={34}
          bg="gray.50"
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
