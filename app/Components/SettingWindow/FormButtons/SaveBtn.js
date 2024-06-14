import { Button, Flex } from "@radix-ui/themes";
import { CheckIcon } from "@radix-ui/react-icons";

export default function SaveBtn(props) {
  return (
    <Button
      onClick={() => {
        props.clickSave();
      }}
      variant="soft"
    >
      <CheckIcon className="cursor-pointer" />
      SAVE
    </Button>
  );
}
