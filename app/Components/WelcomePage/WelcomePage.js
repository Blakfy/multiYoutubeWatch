import { Box, Flex, Text, Avatar, Heading } from "@radix-ui/themes";

export default function WelcomePage() {
  return (
    <Box
      position={"absolute"}
      width={"100%"}
      height={"100%"}
      className="zindex"
    >
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        height={"100%"}
        p={"2"}
      >
        <Avatar size={"7"} src="/blakfyLogo.jpg" fallback="logo" />
        <Text>Welcome to Multi Channel</Text>
        <Text>
          Please adjust your user channel &rdquo;settings&rdquo; and press the
          &rdquo;Save&rdquo; button to save the changes.
        </Text>
        <br />
        <Heading as="h3" typeof="">
          How to make channel settings.
        </Heading>
        <br />
        <Text as="p">
          https://kick.com/<b className="text-orange-500">username</b>
        </Text>
        <Text as="p">
          https://www.twitch.tv/<b className="text-orange-500">username</b>
        </Text>
        <Text as="p">
          https://www.youtube.com/watch?v=
          <b className="text-orange-500">-Lrxv1_i3qc</b>
        </Text>
        <br />
        <Text as="p">
          Copy the field highlighted in orange in the URL information of the
          channel you want to watch and add it to the channel settings.
          settings.
        </Text>
      </Flex>
    </Box>
  );
}
