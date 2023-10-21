import React from "react";

export default function YoutubeChannels() {
  const videoLink = [
    "jfKfPfyJRdk",
    "wBgSH-CGPzg",
    "jfKfPfyJRdk",
    "wBgSH-CGPzg",
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2 gap-0">
      {videoLink.map((videoId, i) => (
        <div key={i} className="text-center p-0">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoLink[i]}?autoplay=1&mute=1`}
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
