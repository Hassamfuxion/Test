export default function HeroSection() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background: `url("/assets/images/resource/Hero2.jpg") no-repeat center center/cover`,
      }}
    >
      {/* Black Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "30%", // Adjust height as needed
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
          zIndex: "2",
        }}
      ></div>

      {/* Star Layer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {[...Array(150)].map((_, i) => {
          const size = Math.random() * 2.5 + 1;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const delay = Math.random() * 3;
          const duration = 2 + Math.random() * 2;

          return (
            <div
              key={i}
              className="star"
              style={{
                position: "absolute",
                top: `${y}vh`,
                left: `${x}vw`,
                width: `${size}px`,
                height: `${size}px`,
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "50%",
                boxShadow: `0 0 ${size * 4}px rgba(255, 255, 255, 0.8)`,
                animation: `glow ${duration}s infinite alternate ease-in-out ${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Hero Content */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          maxWidth: "800px",
          color: "#fff",
          textShadow: "0 0 15px rgba(255,255,255,0.5)",
          zIndex: "3",
          padding: "0 20px",
        }}
      >
        Transforming Ideas into Reality
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          marginTop: "10px",
          maxWidth: "600px",
          color: "#fff",
          textShadow: "0 0 10px rgba(255,255,255,0.5)",
          zIndex: "3",
          padding: "0 15px",
        }}
      >
        Empowering your industry with Tailored Solutions
      </p>

      <style>
        {`
          @keyframes glow {
            0% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
            100% { opacity: 0.4; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}
