"use client";
import React, { useState } from "react";
import YoutubeChannels from "../Components/youtubeChannels/youtubeChannels.js";
import Settings from "../Components/setting/settings.js";

export default function Home() {
  const [viewSettings, setViewSettings] = useState(true);
  const [channelUrl, setChannelUrl] = useState(4);
  const [channelBtn, setChannelBtn] = useState([4, 6, 8, 9, 12]);
  const [channelIdInput, setChannelIdInput] = useState(
    Array(channelUrl)
      .fill("")
      .map((item, index) => ({ id: index, value: "" }))
  );

  const handleClick = () => {
    setViewSettings(!viewSettings);
  };

  const formHandle = (e) => {
    e.preventDefault();
    console.log(channelIdInput);
  };

  const handleInputChange = (id, value) => {
    const newChannelIdInput = [...channelIdInput];
    newChannelIdInput[id] = { id: id, value: value };
    setChannelIdInput(newChannelIdInput);
  };

  const channelInput = () => {
    let channels = [];
    for (let i = 0; i < channelUrl; i++) {
      channels.push(
        <div key={`channelNames${i}`} className="flex m-1 p-1 ">
          <p className="mr-4 text-white">Channel Name</p>
          <input
            className="text-black"
            key={`channelName${i}`}
            type="text"
            value={channelIdInput[i] ? channelIdInput[i].value : ""}
            onChange={(e) => handleInputChange(i, e.target.value)}
          />
        </div>
      );
    }
    return channels;
  };
  const channelButtons = () => {
    let buttons = [];
    for (let i = 0; i < channelBtn.length; i++) {
      buttons.push(
        <button
          className="w-10 m-1 p-2 rounded-md bg-slate-950"
          id={`btn${channelBtn[i]}`}
          key={`btnKey${channelBtn[i]}`}
          onClick={() => setChannelUrl(channelBtn[i])}>
          {channelBtn[i]}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="h-screen">
      {viewSettings ? (
        <div className="bg-slate-700  p-5 mb-20 mr-10 absolute right-0 bottom-0 text-center rounded-md">
          {/* Channel Buttons */}
          <div className="flex justify-around items-center text-white">
            {channelButtons()}
          </div>
          {/* Channel Form */}
          <form onSubmit={formHandle}>
            {channelInput()}
            <button
              type="submit"
              className="w-full m-1 p-2 rounded-md bg-slate-950 text-white">
              Submit
            </button>
          </form>
          <button
            onClick={handleClick}
            className="w-full m-1 p-2 rounded-md bg-slate-950 text-white">
            EXIT
          </button>
        </div>
      ) : (
        <div>
          <Settings handleClick={handleClick} />
        </div>
      )}

      <div>
        <YoutubeChannels displayCount="4" />
      </div>
    </div>
  );
}
