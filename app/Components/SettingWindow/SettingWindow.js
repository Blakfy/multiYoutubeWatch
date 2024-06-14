import React from "react";
import { Box, ScrollArea } from "@radix-ui/themes";

import ChannelsInput from "./ChannelsInput/ChannelsInput";
import ChannelButtonSelector from "./ChannelsButton/ChannelButtonSelector";
import FormButtons from "./FormButtons/FormButtons";
import Headers from "./HeaderContainer/Headers";

export default function SettingWindow(props) {
  const clickSave = () => {
    props.setData(props.videoId);
    localStorage.setItem("channelKey", JSON.stringify(props.videoId));
  };

  const platformChange = (channelId, platforms) => {
    // channelId ve platforms değerlerini kullanarak güncelleme yapacak
    props.setVideoId((prevVideoId) => {
      const updatedVideoId = prevVideoId.map((item) =>
        item.id.toString() === channelId.toString()
          ? { ...item, platform: platforms }
          : item
      );
      return updatedVideoId;
    });
  };

  const onChangeHandler = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    props.setVideoId((prevVideoId) => {
      const updatedVideoId = prevVideoId.map((item) =>
        item.id.toString() === id ? { ...item, name: value } : item
      );

      return updatedVideoId;
    });
  };

  React.useEffect(() => {
    try {
      const localStorageData = localStorage.getItem("channelKey");
      if (localStorageData) {
        const parsedData = JSON.parse(localStorageData);
        props.setVideoId(parsedData);
        props.setData(parsedData);
      } else {
        const parsedData = JSON.stringify(props.videoId);
        localStorage.setItem("channelKey", parsedData);
      }
    } catch (error) {
      console.error("localStorage error:", error);
    }
  }, [props.setData]);

  return (
    <Box
      position="absolute"
      top={"0"}
      right={"0"}
      height={"100%"}
      className="dark:bg-[#121113] bg-white"
    >
      <ScrollArea
        scrollbars="vertical"
        style={{ height: "100%", padding: "2rem" }}
      >
        {/* //? Headers */}
        <Headers setViewSettingWindow={props.setViewSettingWindow} />
        {/* //? ChannelButtonSelector  */}
        <ChannelButtonSelector
          activeChannel={props.activeChannel}
          setActiveChannel={props.setActiveChannel}
        />
        {/* //? Inputs */}
        <Box width="100%" height="100%">
          {props.videoId.slice(0, props.activeChannel).map((channel, index) => (
            <ChannelsInput
              key={channel.id}
              number={channel.id}
              id={channel.id}
              videoId={props.videoId[index].name}
              videoPlatfrom={props.videoId[index].platform}
              handleInputChange={onChangeHandler}
              platformChange={platformChange}
            />
          ))}
        </Box>
        {/* //? SaveBtn */}
        <FormButtons clickSave={clickSave} />
      </ScrollArea>
    </Box>
  );
}
