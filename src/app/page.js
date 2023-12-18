"use client";
import React, { useState } from "react";
import SettingsModal from "@/Components/Setting/SettingsModal";
import YoutubeChannels from "@/Components/YoutubeChannels/youtubeChannels";
import SettingPage from "@/Components/Setting/SettingPage";

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
