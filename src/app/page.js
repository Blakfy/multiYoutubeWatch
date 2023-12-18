"use client";
import React, { Suspense, useEffect, useState } from "react";
import SettingsModal from "@/Components/Setting/SettingsModal";
const YoutubeChannels = React.lazy(() =>
  import("@/Components/YoutubeChannels/YoutubeChannels")
);
const SettingPage = React.lazy(() =>
  import("@/Components/Setting/SettingPage")
);

export default function Home() {
  const [viewSettings, setViewSettings] = useState(false);
  const [data, setData] = useState([]);
  const [channelChange, setChannelChange] = useState("4");

  const handleSettingsViewStatus = () => {
    setViewSettings(!viewSettings);
  };

  return (
    <div className="max-h-[1600px]">
      <Suspense fallback={<div className="text-6xl ">Loading...</div>}>
        <>
          <YoutubeChannels channelChange={channelChange} channels={data} />
        </>
      </Suspense>

      {viewSettings ? (
        <SettingPage
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
