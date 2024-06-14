import React from "react";

const TwitchChannelEmbed = ({ channel }) => {
  // 'parent' parametresi olarak geliştirme ortamınızın domain adını kullanın.
  // Yerel geliştirmede bu genellikle 'localhost' olacaktır.
  // Production ortamında, 'parent' değerini sitenizin gerçek domain adı ile değiştirin.
  const parentDomain =
    process.env.NODE_ENV === "development"
      ? "localhost"
      : "yourproductiondomain.com";
  const src = `https://player.twitch.tv/?channel=${"zeon"}&parent=${parentDomain}`;
  return (
    <iframe src={src} height="300" width="400" allowFullScreen={true}></iframe>
  );
};

export default TwitchChannelEmbed;
