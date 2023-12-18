"use client";
import React, { useState, useEffect } from "react";
export default function YoutubeChannels(props) {
  const channelsArray = Object.keys(props.channels).map((key) => ({
    id: key,
    videoId: props.channels[key],
  }));

  const [gridClass, setGridClass] = useState("grid-cols-2");

<<<<<<< HEAD
  useEffect(() => {
    switch (props.channelChange) {
      case "1":
        setGridClass("grid-cols-1");
        break;
      case "4":
        setGridClass("grid-cols-2");
        break;
      case "9":
        setGridClass("grid-cols-3");
        break;
      case "16":
        setGridClass("grid-cols-4");
        break;
      default:
        setGridClass("grid-cols-4");
        break;
    }
  }, [props.channelChange]);
=======
  let gridClass;
  if (numVideos === 1) {
    gridClass = "grid-cols-1 h-screen w-base";
  } else if (numVideos === 4) {
    gridClass = "grid-cols-2 h-screen w-base";
  } else if (numVideos === 9) {
    gridClass = "grid-cols-3 h-screen w-base";
  } else if (numVideos === 16) {
    gridClass = "grid-cols-4 h-screen w-base";
  } else {
    gridClass = "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-2";
  }
>>>>>>> b051ce578bc844ed025db8319aa3804aadeb320e

  return (
    <div className={`grid ${gridClass} gap-0`}>
      {channelsArray.slice(0, props.channelChange).map((channel, i) => (
        <div key={i} className="text-center p-0">
          <div className="relative" style={{ paddingBottom: "50%" }}>
            <iframe
              className="absolute inset-0"
              width={"100%"}
              height={"100%"}
              src={`https://www.youtube.com/embed/${channel.videoId}?autoplay=1&mute=1`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`YouTube Video ${i}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
