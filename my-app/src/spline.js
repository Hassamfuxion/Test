import React from 'react';

export default function HeroSection() {
  // ERP-related words
  const erpWords = [
    "ERP", "Solutions", "Automation", "Integration", "Finance", "Inventory",
    "Sales", "CRM", "Reporting", "Analytics", "Scalable", "Cloud", "Security",
    "Efficiency", "Productivity", "Dashboard", "Workflow", "Customizable"
  ];

  // Generate 20+ falling elements
  const fallingElements = [];
  for (let i = 0; i < 24; i++) {
    const word = erpWords[Math.floor(Math.random() * erpWords.length)];
    const angle = 90 + Math.random() * 60; // 90° to 150° — looks like falling
    const leftPos = `${Math.random() * 80 + 10}%`; // 10% to 90%
    const delay = Math.random() * 3;
    const duration = 8 + Math.random() * 4;

    fallingElements.push({
      word,
      angle,
      left: leftPos,
      delay,
      duration,
    });
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `url("/assets/images/resource/Hero2.jpg") no-repeat center center/cover`,
        fontFamily: 'Orbitron, sans-serif',
      }}
    >
      {/* Black Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '30%',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
          zIndex: 2,
        }}
      ></div>

      {/* Star Layer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
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
                position: 'absolute',
                top: `${y}vh`,
                left: `${x}vw`,
                width: `${size}px`,
                height: `${size}px`,
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '50%',
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
          fontSize: '3rem',
          fontWeight: '600',
          maxWidth: '800px',
          color: '#fff',
          zIndex: 3,
          padding: '0 20px',
        }}
      >
        Transforming Ideas into Reality
      </h1>

      <p
        style={{
          fontSize: '1.2rem',
          marginTop: '10px',
          maxWidth: '600px',
          color: '#fff',
          zIndex: 3,
          padding: '0 15px',
        }}
      >
        Empowering your industry with Tailored Solutions
      </p>

      {/* YouTube Video Player - Glass Effect */}
      <div
        style={{
          marginTop: '30px',
          width: '80%',
          maxWidth: '800px',
          borderRadius: '16px',
          overflow: 'hidden',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          zIndex: 3,
        }}
      >
        <iframe
          src=""
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: '100%',
            height: '450px',
            border: 'none',
          }}
        ></iframe>
      </div>

      {/* ✅ REALISTIC FALLING TEXT — ANGLED + LOW OPACITY */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        {fallingElements.map((item, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              top: '-50px',
              left: item.left,
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: '500',
              transform: `rotate(${item.angle}deg)`,
              opacity: 0.5, // 👈 Low opacity for dreamy effect
              animation: `fallLoop ${item.duration}s linear ${item.delay}s infinite`,
              textShadow: '0 0 4px rgba(255,255,255,0.3)',
              whiteSpace: 'nowrap',
            }}
          >
            {item.word}
          </span>
        ))}
      </div>

      {/* Optional Button */}
      <button
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: '20px',
          color: '#fff',
          fontSize: '0.9rem',
          fontWeight: '500',
          cursor: 'pointer',
          backdropFilter: 'blur(5px)',
          transition: 'all 0.3s ease',
          textShadow: '0 0 5px rgba(255,255,255,0.6)',
          zIndex: 3,
        }}
       
      >
        <span style={{ marginRight: '8px' }}>✨</span>
        New Background
      </button>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes glow {
            0% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
            100% { opacity: 0.4; transform: scale(1); }
          }

          @keyframes fallLoop {
            0% {
              opacity: 0;
              transform: translateY(0) rotate(var(--angle));
            }
            10% {
              opacity: 0.5;
            }
            90% {
              opacity: 0.5;
            }
            100% {
              opacity: 0;
              transform: translateY(120vh) rotate(var(--angle));
            }
          }
        `}
      </style>
    </div>
  );
}