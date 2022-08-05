import "./styles.css";
import Roadmabtn from "./Roadmapbtn";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./Navbar";

const components = {
  Drawer: {
    variants: {
      alwaysOpen: {
        parts: ["dialog, dialogContainer"],
        dialog: {
          pointerEvents: "auto"
        },
        dialogContainer: {
          pointerEvents: "none"
        }
      }
    }
  }
};

const theme = extendTheme({
  components
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Navbar />

        <Roadmabtn />
      </div>
    </ChakraProvider>
  );
}
