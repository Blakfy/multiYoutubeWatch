import { Flex } from "@radix-ui/themes";
import ChannelsButton from "./Button";

export default function Inputs(props) {
  const buttonData = [
    { id: 1, name: "1" },
    { id: 4, name: "4" },
    { id: 9, name: "9" },
    { id: 16, name: "16" },
  ];

  const onClickHandler = (e) => {
    localStorage.setItem("buttonKey", JSON.stringify(e));
  };

  const channelSelector = () => {
    return (
      <>
        {buttonData.map((btn) => (
          <ChannelsButton
            key={btn.id}
            name={btn.name}
            setActiveChannel={() => {
              props.setActiveChannel(btn.id);
            }}
            onClickHandler={() => {
              onClickHandler(btn.id);
            }}
          />
        ))}
      </>
    );
  };

  return (
    <Flex justify={"center"} p="1" gap="3">
      {channelSelector()}
    </Flex>
  );
}
