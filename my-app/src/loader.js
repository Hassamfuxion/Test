import React, { useState, useEffect } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds
    }, 5000);
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
  };

  const videoStyles = {
    width: "80%",
    maxWidth: "600px",
  };

  const contentStyles = {
    background: "linear-gradient(to right, blue, black)", // Gradient applied after loader
    minHeight: "100vh", // Ensure it fills the entire viewport
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    padding: "20px",
  };

  if (loading) {
    return (
      <div style={loaderStyles}>
        <video autoPlay loop muted style={videoStyles}>
          <source src="/assets/images/animation logo.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

 
};

export default Loader;
