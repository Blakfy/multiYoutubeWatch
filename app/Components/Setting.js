import React from "react";
import SettingWindow from "./SettingWindow/SettingWindow";
import SettingButton from "./SettingButton/SettingButton";

export default function Setting(props) {
  const [viewSettingWindow, setViewSettingWindow] = React.useState(false);

  return (
    <>
      {viewSettingWindow ? (
        <SettingWindow
          setVideoId={props.setVideoId}
          videoId={props.videoId}
          activeChannel={props.activeChannel}
          setActiveChannel={props.setActiveChannel}
          data={props.data}
          setData={props.setData}
          setViewSettingWindow={setViewSettingWindow}
        />
      ) : (
        <SettingButton setViewSettingWindow={setViewSettingWindow} />
      )}
    </>
  );
}
