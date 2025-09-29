import React from "react";

export default function HeroVideo() {
  return (
    <div
      style={{
        marginTop: "50px",
        position: "relative",
        paddingTop: "56.25%", // 16:9 aspect ratio
      }}
    >
      <iframe
        src="https://player.vimeo.com/video/1122873963?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "16px",
        }}
        title="Hero Video"
      ></iframe>
    </div>
  );
}
