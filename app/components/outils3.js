import ToolCard from "../UI/card";
import YouTubePlayer from "youtube-player";
import React, { useEffect, useRef, useState } from "react";

export default function Outils3() {
  const playerRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const player1 = YouTubePlayer(playerRef.current, {
      videoId: "jfKfPfyJRdk",
    });

    setPlayer(player1);

    if (player1) {
      player1.playVideo().then(function () {
        console.log(
          "Starting to play player1. It will take some time to buffer video before it starts playing."
        );
      });
    }
  }, []);

  // const handlePlay = () => {
  //   console.log("Play button clicked");
  //   if (player) {
  //     player.unMute().then(function () {
  //       console.log("Sound is on");
  //     });
  //   } else {
  //     console.log("Player is not initialized yet");
  //   }
  // };
  
  // const handlePause = () => {
  //   console.log("Pause button clicked");
  //   if (player) {
  //     player.mute().then(function () {
  //       console.log("Sound is off");
  //     });
  //   } else {
  //     console.log("Player is not initialized yet");
  //   }
  // };

  return (
    <ToolCard>
      <div style={{ display: "none" }} ref={playerRef}></div>
      {/* <div>
        <p>Listening lofi</p>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div> */}
    </ToolCard>
  );
}
