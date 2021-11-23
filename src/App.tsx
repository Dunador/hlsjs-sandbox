import "./App.css";
import Hls from "hls.js";
import React, { ChangeEvent, SyntheticEvent, useEffect } from "react";

function App() {
  let videoPlayer: HTMLVideoElement;
  const [currentTime, setTime] = React.useState();
  // const [videoPlayerTwo, setVideoPlayerTwo] = React.useState();

  useEffect(() => {
    if (Hls.isSupported() && videoPlayer) {
      // var video2 = videoPlayerTwo;
      var videoSrc = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
      if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(videoPlayer);
        // var hls2 = new Hls();
        // hls2.loadSource(videoSrc);
        // hls2.attachMedia(video2);
      }
    }
  });

  const videoOnSeeking = (event: any) => {
    console.log(event.target.currentTime);
    setTime(event.target.currentTime);
    // videoPlayer.currentTime = event.target.currentTime;
    // videoPlayerTwo.currentTime = event.target.currentTime;
  };

  // const videoSeeked = (event) => {
  //   videoPlayer.play();
  //   // videoPlayerTwo.play();
  // };

  const videoStyle = {
    width: 640,
    height: 360,
    background: "#000",
    margin: 4,
  };

  return (
    <div>
      <video
        style={videoStyle}
        ref={(player) => (videoPlayer = player!!)}
        autoPlay={true}
        // onclick={async (event) =>
        //   event.target.paused ? await event.target.play() : event.target.pause()
        // }
        onSeeking={videoOnSeeking}
        // onSeeked={videoSeeked}
        controls
      />
      <p>Current time of video: {currentTime}</p>
      {/* <video
        style={videoStyle}
        ref={(player) => setVideoPlayerTwo(player)}
        onSeeking={videoOnSeeking}
        onSeeked={videoSeeked}
        controls
      /> */}
    </div>
  );
}

export default App;
