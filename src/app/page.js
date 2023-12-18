"use client";
import React, { useState } from "react";
import SettingsModal from "@/src/Components/Setting/SettingsModal";
import YoutubeChannels from "../../src/Components/YoutubeChannels/YoutubeChannels";
import SettingPage from "../../src/Components/Setting/SettingPage";

export default function Home() {
  const [viewSettings, setViewSettings] = useState(false);
  const [data, setData] = useState([]);
  const [channelChange, setChannelChange] = useState("4");

  const handleSettingsViewStatus = () => {
    setViewSettings(!viewSettings);
  };

  return (
    <div className="">
      <YoutubeChannels channelChange={channelChange} channels={data} />

      {viewSettings ? (
        <SettingPage
          data={data}
          setData={setData}
          view={handleSettingsViewStatus}
          setChannelChange={setChannelChange}
        />
      ) : (
        <SettingsModal view={handleSettingsViewStatus} />
      )}
    </div>
  );
}
