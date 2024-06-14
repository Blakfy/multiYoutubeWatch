import React from "react";
import { Select } from "@radix-ui/themes";

export default function Platform(props) {
  return (
    <Select.Root
      size="2"
      defaultValue={props.videoPlatfrom}
      value={props.videoPlatfrom}
      onValueChange={(value) => props.platformChange(props.id, value)}
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="youtube">Youtube</Select.Item>
        <Select.Item value="twitch">Twitch</Select.Item>
        <Select.Item value="kick">Kick</Select.Item>
      </Select.Content>
    </Select.Root>
  );
}
