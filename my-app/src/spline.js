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
        background: 'url("/assets/images/resource/Hero.jpg") no-repeat center center/cover',
      }}
    >
      {/* Overlay Effect */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0',
          left: '0',
          background: 'rgba(0, 0, 0, 0.5)', // Dark overlay effect
        }}
      ></div>

      {/* Hero Content */}
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', maxWidth: '800px', color: '#fff', zIndex: '1' }}>
        Your Automation Partner
      </h1>
      <p style={{ fontSize: '1.2rem', marginTop: '10px', maxWidth: '600px', color: '#fff', zIndex: '1' }}>
        Custom artificial intelligence solutions tailored for your business.
      </p>
      <div style={{ marginTop: '20px', display: 'flex', gap: '15px', zIndex: '1' }}>
        <button
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            fontWeight: 'bold',
            background: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            color: '#fff',
            borderRadius: '8px',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
          }}
        >
          Our AI Solutions
        </button>
        <button
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            fontWeight: 'bold',
            background: '#004e92',
            border: 'none',
            color: '#fff',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0px 4px 10px rgba(0, 78, 146, 0.4)',
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
