import React from "react";
import YoutubeChannels from "../Components/youtubeChannels/youtubeChannels.js";
import Settings from "../Components/setting/settings.js";

export default function Home() {
  return (
    <div>
      <YoutubeChannels />
      <Settings />
    </div>
  );
}
