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
  height: 100vh; /* Centering vertically */

  .card {
    width: 90%;
    max-width: 1200px; /* Set a max width for larger screens */
    height: 450px;
    background: transparent;
    border-radius: 16px;
    display: flex;
    flex-direction: row; /* Horizontal layout */
    overflow: hidden;
    box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
    position: relative;
    padding: 50px;
    transition: 0.2s ease-in-out;
  }

  .img-container {
    width: 40%; /* Adjust image size */
    height: 100%;
    overflow: hidden;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(7px); /* Apply initial blur to the image */
    transition: 0.2s ease-in-out;
  }

  .textBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
    padding: 20px;
    width: 60%; /* Adjust width of text box */
    color: white;
    opacity: 1; /* Keep the text visible */
    filter: blur(7px); /* Apply initial blur to the text */
    transition: opacity 0.2s ease-in-out, filter 0.2s ease-in-out; /* Transition both opacity and filter */
  }

  .textBox > .text {
    font-weight: bold;
  }

  .textBox > .head {
    font-size: 24px;
  }

  .textBox > h1 {
    font-size: 32px; /* Increased font size */
    font-weight: 600;
  }

  .textBox > .text {
    font-size: 18px; /* Increased font size */
    font-weight: 300;
  }

  .card:hover .textBox {
    opacity: 1; /* Text appears unblurred */
    filter: blur(0px); /* Remove blur from text */
  }

  .card:hover .img {
    filter: blur(0px); /* Remove blur from image */
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
      height: auto;
      width: 100%;
      padding: 25px;
    }

    .img-container {
      width: 100%;
      height: 350px; /* Adjust image height */
    }

    .textBox {
      width: 100%;
      padding: 20px; /* Adjust padding */
    }

    .textBox > h1 {
      font-size: 28px;
    }

    .textBox > .head {
      font-size: 22px;
    }

    .textBox > .text {
      font-size: 16px; /* Adjust font size for smaller screens */
    }
  }
`;

export default Card;
