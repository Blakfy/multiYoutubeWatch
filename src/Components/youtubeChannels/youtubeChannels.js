import React from "react";
import channelKey from "../../app/page";

export default function YoutubeChannels({ channelKey }) {
  const numVideos = channelKey.length;

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

  return (
    <div className={`grid ${gridClass} gap-0`}>
      {channelKey.slice(0, numVideos).map((videoId, i) => (
        <div key={i} className="text-center p-0">
          <div className="relative" style={{ paddingBottom: "50%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
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
