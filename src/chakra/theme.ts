import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#ff3c00",
      900: "#1a202c",
    },
    fonts: {
      body: "Open Sans, sans-serif",
    },
    styles: {
      globals: () => ({
        body: {
          bg: "gray-200",
        },
      }),
    },
    components: {},
  },
});
