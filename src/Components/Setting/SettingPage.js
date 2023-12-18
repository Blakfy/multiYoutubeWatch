"use client";
import React, { useState, useEffect } from "react";

export default function SettingPage(props) {
  const [videoId, setVideoId] = useState({
    channel0: "cH7VBI4QQzA",
    channel1: "XEJM4Hcgd3M",
    channel2: "GSmCh4DrbWY",
    channel3: "q0kPBRIPm6o",
    channel4: "PldQqmRwgDc",
    channel5: "cmkAbDUEoyA",
    channel6: "cmkAbDUEoyA",
    channel7: "q0kPBRIPm6o",
    channel8: "q0kPBRIPm6o",
    channel9: "Li3Dvqlo5uE",
    channel10: "TmtVbezZaqg",
    channel11: "MDiY0SeyfGw",
    channel12: "MDiY0SeyfGw",
    channel13: "HfgIFGbdGJ0",
    channel14: "T73ohDE6kh8",
    channel15: "VsuSbXPN93o",
  });
  const channelCount = [
    {
      id: "channelCount1",
      name: "1",
    },
    {
      id: "channelCount4",
      name: "4",
    },
    {
      id: "channelCount9",
      name: "9",
    },
    {
      id: "channelCount16",
      name: "16",
    },
  ];

  function ChannelButton() {
    return (
      <div className="flex justify-between items-stretch m-1">
        {channelCount.map((channel, index) => (
          <button
            onClick={() => {
              props.setChannelChange(channel.name);
            }}
            key={index}
            id={channel.id}
            className="w-10 h-10 rounded-sm bg-prime-petrel hover.bg-prime-kuretake text-prime">
            {channel.name}
          </button>
        ))}
      </div>
    );
  }

  useEffect(() => {
    try {
      const localStorageData = localStorage.getItem("key");
      if (localStorageData) {
        const parsedData = JSON.parse(localStorageData);
        setVideoId(parsedData);
        props.setData(parsedData);
      } else {
        const parsedData = JSON.stringify(videoId);
        localStorage.setItem("key", parsedData);
      }
    } catch (error) {
      console.error("localStorage error:", error);
    }
    // Burada props.setData dokunma kafayi yiyor.
  }, [props.setData]);

  const formSubmit = (event) => {
    event.preventDefault();
    props.setData(videoId);
    localStorage.setItem("key", JSON.stringify(videoId));
  };

  const onChangeHandler = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setVideoId(() => ({
      ...videoId,
      [id]: value,
    }));
  };

  const defaultCookie = () => {
    localStorage.clear();
    window.location.reload();
  };

  const fullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <div className="bg-prime-mississippi absolute top-0 right-0 bottom-0 p-5">
      <form onSubmit={formSubmit}>
        <div className="flex flex-col justify-stretch">
          {Object.keys(videoId).map((key, index) => (
            <div
              key={`channel${index}`}
              className="flex justify-center items-center">
              <p className="m-1 text-prime ">Ch-{index + 1}</p>
              <input
                id={`channel${index}`}
                onChange={onChangeHandler}
                placeholder={`channel${index}`}
                defaultValue={props.data[key]}
                maxLength={20}
                className="m-1 h-8 p-4 bg-prime-petrel text-prime rounded-sm text-base"
                type="text"
              />
            </div>
          ))}
        </div>
        <button
          onClick={formSubmit}
          type="submit"
          id="submit"
          className="bg-prime-petrel hover.bg-prime-kuretake text-prime m-1 w-full h-10 rounded-sm ">
          Submit
        </button>
        <button
          className="bg-prime-petrel hover.bg-prime-kuretake text-prime m-1 w-full h-10 rounded-sm "
          onClick={fullScreen}>
          Full Screen
        </button>
      </form>
      <div className="flex justify-evenly items-stretch h-18 w-full text-base text-prime">
        <button
          onClick={() => props.view()}
          className="bg-prime-petrel hover.bg-prime-kuretake m-1  w-full h-auto rounded-sm">
          Exit
        </button>
        <button
          className="bg-prime-petrel hover.bg-prime-kuretake m-1  w-full h-auto rounded-sm"
          onClick={defaultCookie}>
          Default Stream
        </button>
      </div>
      <ChannelButton />
    </div>
  );
}
