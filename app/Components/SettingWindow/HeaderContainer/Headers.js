import React from "react";
import DarkMode from "./DarkMode";
import { Box, Flex, Heading } from "@radix-ui/themes";
import { Cross1Icon, EnterFullScreenIcon } from "@radix-ui/react-icons";

export default function Inputs(props) {
  const fullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };
  return (
    <Flex direction="column" mb={"3"} className="border-b border-gray-300">
      <Flex direction="row" justify="end">
        {/* //? İşlevsel Butonlar */}
        <DarkMode />

        <EnterFullScreenIcon
          width={30}
          height={20}
          className="cursor-pointer"
          title="enter full screen"
          onClick={() => fullScreen()}
        />

        <Cross1Icon
          width={30}
          height={20}
          className="cursor-pointer"
          title="close"
          onClick={() => props.setViewSettingWindow(false)}
        />
      </Flex>

      {/* Welcome Comments */}
      <Box p={"2"}>
        <Heading align={"center"} as="h3" size="3">
          Welcome to MultiChannel
        </Heading>
      </Box>
    </Flex>
  );
}
