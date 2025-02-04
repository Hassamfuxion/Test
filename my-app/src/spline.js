export default function HeroSection() {
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
        animation: 'moveBackground 30s linear infinite', // Smooth background motion
      }}
    >
      {/* Sparkles Effect */}
      <div className="sparkles" style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: '1',
      }}></div>

      {/* Dark Overlay Effect */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0',
          left: '0',
          background: 'rgba(0, 0, 0, 0.5)', // Dark overlay effect
          zIndex: '2',
        }}
      ></div>

      {/* Black Gradient Overlay at the Bottom */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '40%', // Adjust height for the intensity of the effect
          bottom: '0',
          left: '0',
          background: 'linear-gradient(to top, black 30%, rgba(0,0,0,0) 100%)',
          zIndex: '2',
        }}
      ></div>

      {/* Hero Content */}
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          maxWidth: '800px',
          color: '#fff',
          zIndex: '3', // Ensure content is above other layers
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
          zIndex: '3', // Ensure content is above other layers
        }}
      >
       Empowering your industry with Tailored Solution
      </p>
     

      <style>
        {`
          @keyframes moveBackground {
            0% {
              background-position: 0 0;
            }
            50% {
              background-position: 50% 50%;
            }
            100% {
              background-position: 0 0;
            }
          }

          /* Sparkles (Stars) Effect */
          .sparkles::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            z-index: 1;
            pointer-events: none;
            animation: sparkleAnim 5s infinite ease-in-out;
          }

          /* Fewer stars, less glow */
          .sparkles::before {
            background: radial-gradient(circle, rgba(173, 216, 230, 0.6) 2px, rgba(173, 216, 230, 0) 2px);
            background-size: 30px 30px;
            animation: sparkleAnim 5s infinite ease-in-out;
          }

          /* Subtle glow and fade effect */
          @keyframes sparkleAnim {
            0% {
              opacity: 0.2;
            }
            30% {
              opacity: 0.4;
            }
            100% {
              opacity: 0.2;
            }
          }
        `}
      </style>
    </div>
  );
}
