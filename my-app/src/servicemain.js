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
          <h1>What Benefits Do You Gain From Our ERP Solutions?</h1>
          <p className="text">Supply exceptional services, integrating markets and initiatives.</p>
          <p className="text">
            SS CONSULTANT offers a trusted and efficient Enterprise Resource Planning (ERP) solution, FOCUS.
            Tailored for large, medium, and small-sized manufacturing and service industries, it automates the entire organizational process.
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
  min-height: 100vh; /* Ensures proper centering */
  padding: 20px; /* Adds spacing on smaller screens */

  .card {
    width: 90%;
    max-width: 1200px;
    background: transparent;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
    position: relative;
    padding: 50px;
    transition: 0.2s ease-in-out;
  }

  .img-container {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .img {
    width: 100%;
    max-width: 300px;
    height: auto;
    object-fit: cover;
    filter: blur(7px);
    transition: 0.2s ease-in-out;
  }

  .textBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    padding: 20px;
    width: 60%;
    color: white;
    opacity: 1;
    filter: blur(7px);
    transition: opacity 0.2s ease-in-out, filter 0.2s ease-in-out;
  }

  .textBox > h1 {
    font-size: 32px;
    font-weight: 600;
  }

  .textBox > .text {
    font-size: 18px;
    font-weight: 300;
  }

  .card:hover .textBox {
    opacity: 1;
    filter: blur(0px);
  }

  .card:hover .img {
    filter: blur(0px);
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
      flex-direction: column;
      height: auto;
      width: 100%;
      padding: 25px;
      align-items: center;
    }

    .img-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }

    .img {
      width: 100%;
      max-width: 250px;
      height: auto;
    }

    .textBox {
      width: 100%;
      padding: 15px;
      text-align: center;
      align-items: center;
    }

    .textBox > h1 {
      font-size: 24px;
    }

    .textBox > .text {
      font-size: 16px;
    }
  }
`;

export default Card;
