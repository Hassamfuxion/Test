import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        {/* Background Image */}
        <div className="img-container">
          <img src="assets/images/resource/servc-thumb.png" alt="Service" className="img" />
        </div>
        <div className="textBox">
          <p className="text head"></p>
          <h1>What Benefits Do You Gain From Our ERP Solutions?</h1>
          <p className="text">Supply exceptional services, integrating markets and initiatives.</p>
          <p className="text">
            SS CONSULTANT offers a trusted and efficient Enterprise Resource Planning (ERP) solution, FOCUS. Tailored for large, medium, and small-sized manufacturing and service industries, it automates the entire organizational process.
            Our key clients include government organizations, textile mills, garment factories, printing presses, and other production units.
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .card {
    width: 80%;
    height: 350px;
    background: transparent;
    border-radius: 16px;
    display: flex;
    flex-direction: row; /* Horizontal layout */
    overflow: hidden;
    box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
    position: relative;
    transition: 0.2s ease-in-out;
    padding: 50px;
  }

  .img-container {
    width: 40%;
    height: 100%;
    overflow: hidden;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s ease-in-out;
  }

  .textBox {
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    padding: 20px; /* Padding inside */
    width: 60%;
    color: white;
    transition: 0.2s ease-in-out;
  }

  .textBox > .text {
    font-weight: bold;
  }

  .textBox > .head {
    font-size: 20px;
  }

  .textBox > h1 {
    font-size: 24px;
    font-weight: 600;
  }

  .textBox > .text {
    font-size: 14px;
    font-weight: 300;
  }

  .card:hover .textBox {
    opacity: 1;
  }

  .card:hover .img {
    filter: blur(7px);
    animation: anim 3s infinite;
  }

  @keyframes anim {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }

    100% {
      transform: translateY(0);
    }
  }

  .card:hover {
    transform: scale(1.04) rotate(-1deg);
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .card {
      flex-direction: column; /* Stack the image and text vertically */
      height: auto; /* Adjust height to content */
    }

    .img-container {
      width: 100%;
      height: 250px;
    }

    .textBox {
      width: 100%;
      padding: 15px; /* Reduced padding for smaller screens */
    }

    .textBox > h1 {
      font-size: 20px; /* Reduce font size for smaller screens */
    }

    .textBox > .head {
      font-size: 18px; /* Reduce font size for smaller screens */
    }

    .textBox > .text {
      font-size: 12px; /* Reduce font size for smaller screens */
    }
  }
`;

export default Card;
