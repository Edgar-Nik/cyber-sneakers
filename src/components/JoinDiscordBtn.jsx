import React from "react";
import discordIco from "../assets/imgs/logo/discordico.svg";

export default function DiscordBtn({ children }) {
  const joinNow = () => {
    window.open("https://discord.com/invite/CyberSneakers", "_blank");
  };
  return (
    <button onClick={joinNow} className="join-discord-btn">
      <img src={discordIco} alt="" /> {children}
    </button>
  );
}
