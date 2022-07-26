import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { TabsTab } from "./tabs/TabsTab";
import theme from "./theme/theme";
import { Router } from "./router/Router";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {/* <TabsTab /> */}
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
