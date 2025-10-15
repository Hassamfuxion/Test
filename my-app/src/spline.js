import React, { useEffect } from "react";

export default function HeroVideo() {
  useEffect(() => {
    // Load Vimeo Player script
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        padding: "56.25% 0 0 0", // 16:9 ratio
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        marginTop: "50px",
      }}
    >
      <iframe
        src="https://player.vimeo.com/video/1127599039?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=0"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        title="Logo Fixed Video"
      ></iframe>
    </div>
  );
}
