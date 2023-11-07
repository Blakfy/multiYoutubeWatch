import React from "react";
import channelKey from "../../app/page";

export default function YoutubeChannels({ channelKey }) {
  const numVideos = channelKey.length;

  let gridClass;
  if (numVideos === 4) {
    gridClass = "grid-cols-2";
  } else if (numVideos === 6) {
    gridClass = "grid-cols-3";
  } else if (numVideos === 9) {
    gridClass = "grid-cols-3";
  } else if (numVideos === 16) {
    gridClass = "grid-cols-4";
  } else {
    gridClass =
      "grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-2";
  }

  return (
    <div className={`grid ${gridClass} gap-0`}>
      {channelKey.map((videoId, i) => (
        <div key={i} className="text-center p-0">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
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
