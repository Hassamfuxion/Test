import React from 'react';

export default function HeroSection() {
  const curvedSentence = [
    { word: "React", angle: -15 },
    { word: "Bits", angle: -10 },
    { word: "is", angle: -5 },
    { word: "too", angle: 0 },
    { word: "library", angle: 5 },
    { word: "of", angle: 10 },
    { word: "animated", angle: 15 },
    { word: "and", angle: 20 },
    { word: "interactive", angle: 25 },
    { word: "React", angle: 30 },
    { word: "components", angle: 35 },
    { word: "designed", angle: 40 },
  ];

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
      {/* Gradient & Stars — unchanged */}
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

      {/* Hero Text */}
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

      {/* YouTube Player */}
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
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '450px', border: 'none' }}
        ></iframe>
      </div>

      {/* ✅ REAL FALLING TEXT — FROM TOP TO BOTTOM */}
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
        {curvedSentence.map((item, i) => {
          const delay = i * 0.2; // stagger
          const leftPos = 20 + (i * 7); // spread horizontally (20% to ~90%)
          return (
            <span
              key={i}
              style={{
                position: 'absolute',
                top: '-50px',
                left: `${Math.min(leftPos, 90)}%`,
                color: i % 2 === 0 ? '#fff' : '#00f0ff',
                fontSize: '1.1rem',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                opacity: 0,
                // Pass angle via CSS variable
                '--angle': `${item.angle}deg`,
                animation: `fallToBottom 2.5s ease-out ${delay}s forwards`,
                textShadow: '0 0 4px rgba(255,255,255,0.6)',
              }}
            >
              {item.word}
            </span>
          );
        })}
      </div>

      {/* Button */}
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
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
          e.target.style.transform = 'scale(1)';
        }}
      >
        <span style={{ marginRight: '8px' }}>✨</span>
        New Background
      </button>

      {/* Animations */}
      <style>
        {`
          @keyframes glow {
            0% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
            100% { opacity: 0.4; transform: scale(1); }
          }

          @keyframes fallToBottom {
            0% {
              opacity: 0;
              transform: translateY(0) rotate(0deg);
            }
            30% {
              opacity: 1;
            }
            100% {
              opacity: 1;
              transform: translateY(65vh) rotate(var(--angle));
            }
          }
        `}
      </style>
    </div>
  );
}