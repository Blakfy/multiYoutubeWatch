import React from "react";

export default function Iframe(props) {
  const platformData = (platform, channelName) => {
    switch (platform) {
      case "youtube":
        return `https://www.youtube.com/embed/${channelName}?autoplay=1&mute=1`;
      case "twitch":
        return `https://player.twitch.tv/?channel=${channelName}&parent=${"localhost"}`;
      case "kick":
        return `https://player.kick.com/${channelName}`;
      default:
        return `https://www.youtube.com/embed/${channelName}?autoplay=1&mute=1`;
    }
  };
  return (
    <iframe
      key={props.id}
      className="aspect-video"
      width="100%"
      height="100%"
      src={platformData(props.platform, props.channelName)}
      title={`${props.channelName} ${props.platform} video player`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  );
}
