import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "orange",
        color: "#000"
      }
    }
  }
});
export default theme;
