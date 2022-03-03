/* eslint-disable no-unused-vars */
import React from "react";

import LinkedIn from "../assets/image/Homepage/SVG/Asset 455.svg";
import Twitter from "../assets/image/Homepage/SVG/Asset 455.svg";
import FaceBook from "../assets/image/Homepage/SVG/Asset 457.svg";
import Discord from "../assets/image/Homepage/SVG/Asset 456.svg";
import Telegram from "../assets/image/Homepage/SVG/Asset 457.svg";

// interface logDescription {
//   source: string
//   alt: string
// };

const ConnectionItem = ({ source, alt, url }) => {
  return (
    <img
      style={{ cursor: "pointer" }}
      onClick={() => window.open(url)}
      src={source}
      alt={alt}
      className="h-20 w-25 mx-10"
    />
  );
};

const ConnecttionItems = (socials) => {
  if (!socials.socials || socials.socials.length < 1) {
    socials = [
      {
        source: Twitter,
        alt: "twitter",
        url: "https://twitter.com/Ignite_Defi",
      },
      {
        source: Telegram,
        alt: "telegram",
        url: "https://t.me/ignite_defi",
      },

      {
        source: Discord,
        alt: "discord",
        url: "discord.gg/ignitedefi",
      },
    ];
  } else {
    socials = socials.socials;
  }
  return (
    <>
      {socials.map((p, index) => (
        <ConnectionItem key={index} source={p.source} alt={p.alt} url={p.url} />
      ))}
    </>
  );
};

export default ConnecttionItems;
