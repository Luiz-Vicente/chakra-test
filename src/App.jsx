import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider, Center } from "@chakra-ui/react";
import Gamefication from "./components/Gamefication";

function App() {
  return (
    <ChakraProvider>
      <Center height='600px'>
        <Gamefication />
      </Center>
    </ChakraProvider>
  );
}

export default App;
