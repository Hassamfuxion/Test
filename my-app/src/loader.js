import React, { useState, useEffect } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress filling over 5 seconds
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval); // Stop the progress bar once it's full
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50);

    // Stop loader and start sliding up after 5 seconds
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 5 seconds for loading before triggering slide-up
  }, []);

  const loaderStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "black", // Black background for loader
    zIndex: 9999,
    transition: "transform 1s ease-out", // Slide-up transition
    transform: loading ? "translateY(0)" : "translateY(-100%)", // Slide-up when loader disappears
  };

  const videoStyles = {
    width: "30%", // Adjust the width to make the video smaller
    maxWidth: "300px", // Limit the max width to 300px
    borderRadius: "10px", // Optional: Add rounded corners to the video
  };

  const progressBarContainerStyles = {
    position: "absolute",
    bottom: "20px",
    left: "0",
    width: "100%",
    height: "5px",
    background: "#333", // Dark background for the progress bar
  };

  const progressBarStyles = {
    width: `${progress}%`,
    height: "100%",
    background: "#4376BA", // Blue to light blue gradient
    transition: "width 0.1s ease-in-out", // Smooth transition for progress bar
  };

  return (
    <div style={loaderStyles}>
      <video autoPlay loop muted style={videoStyles}>
        <source src="/assets/images/anim1.mp4" type="video/mp4" />
      </video>
      <div style={progressBarContainerStyles}>
        <div style={progressBarStyles}></div>
      </div>
    </div>
  );
};

export default Loader;
