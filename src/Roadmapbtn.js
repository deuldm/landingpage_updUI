import React from "react";
import { DrawerBody, Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import {
  RadioGroup,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody
} from "@chakra-ui/react";

import {
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from "@chakra-ui/react";

function DrawerExample({ children, ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const initialFocusRef = React.useRef();

  return (
    <>
      <RadioGroup
        value={scrollBehavior}
        onChange={setScrollBehavior}
      ></RadioGroup>
      <Button class="button" ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Road Map
      </Button>
      <Drawer
        variant="alwaysOpen"
        {...rest}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        trapFocus={false}
        closeOnOverlayClick={false}
        blockScrollOnMount={false}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Road Map </DrawerHeader>
          <DrawerBody>
            <Popover
              initialFocusRef={initialFocusRef}
              placement="left"
              closeOnBlur={false}
            >
              <PopoverTrigger>
                <Button class="btnImg">
                  <Image
                    maxW="230px"
                    objectFit="cover"
                    p="1"
                    m="8"
                    border-top-left-radius="10px"
                    border-bottom-right-radius="10px"
                    src="lu.jpg"
                    alt="lu"
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
              >
                <PopoverHeader pt={4} fontWeight="bold" border="0">
                  Manage Your Channels
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </PopoverBody>
              </PopoverContent>
            </Popover>

            <Popover
              initialFocusRef={initialFocusRef}
              placement="left"
              closeOnBlur={false}
            >
              <PopoverTrigger>
                <Button class="btnImg">
                  <Image
                    maxW="230px"
                    objectFit="cover"
                    p="1"
                    m="8"
                    border-top-left-radius="10px"
                    border-bottom-right-radius="10px"
                    src="lu.jpg"
                    alt="lu"
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
              >
                <PopoverHeader pt={4} fontWeight="bold" border="0">
                  Manage Your Channels
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </PopoverBody>
              </PopoverContent>
            </Popover>

            <Popover
              initialFocusRef={initialFocusRef}
              placement="left"
              closeOnBlur={false}
            >
              <PopoverTrigger>
                <Button class="btnImg">
                  <Image
                    maxW="230px"
                    objectFit="cover"
                    p="1"
                    m="8"
                    border-top-left-radius="10px"
                    border-bottom-right-radius="10px"
                    src="lu.jpg"
                    alt="lu"
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
              >
                <PopoverHeader pt={4} fontWeight="bold" border="0">
                  Manage Your Channels
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </PopoverBody>
              </PopoverContent>
            </Popover>

            <Popover
              initialFocusRef={initialFocusRef}
              placement="left"
              closeOnBlur={false}
            >
              <PopoverTrigger>
                <Button class="btnImg">
                  <Image
                    maxW="230px"
                    objectFit="cover"
                    p="1"
                    m="8"
                    border-top-left-radius="10px"
                    border-bottom-right-radius="10px"
                    src="lu.jpg"
                    alt="lu"
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
              >
                <PopoverHeader pt={4} fontWeight="bold" border="0">
                  Manage Your Channels
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
