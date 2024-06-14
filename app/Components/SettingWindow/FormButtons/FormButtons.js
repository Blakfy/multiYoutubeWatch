import { Flex } from "@radix-ui/themes";
import ClearCookie from "./ClearCookie";
import SaveBtn from "./SaveBtn";

export default function FormButtons(props) {
  return (
    <Flex direction="column" px="9" gap="3">
      <SaveBtn clickSave={props.clickSave} />
      <ClearCookie />
    </Flex>
  );
}
