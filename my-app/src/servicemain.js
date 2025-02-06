import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="box">
          <div className="content">
            <span className="title">What Benefits Do You Gain </span>
            <span className="title">From Our ERP Solutions?</span>
            <h2></h2>
            <p>Supply exceptional services, integrating markets and initiatives.</p>
            <p>
              SS CONSULTANT offers a trusted and efficient Enterprise Resource Planning (ERP) solution, FOCUS. Tailored for large, medium, and small-sized manufacturing and service industries, it automates the entire organizational process.
              Our key clients include government organizations, textile mills, garment factories, printing presses, and other production units.
            </p>
          </div>
          <div className="image-wrapper">
            <img src="assets/images/resource/servc-thumb.png" alt="ERP Solutions" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: transparent;

  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem;
  }

  .box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    background: rgba(255, 255, 255, 0.07);
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.222);
    backdrop-filter: blur(20px);
    border-radius: 1rem;
    transition: all ease 0.3s;
    text-align: left;
    flex-wrap: wrap; /* Allow wrapping on small screens */
  }

  .content {
    flex: 1;
    color: white;
    max-width: 50%; /* Limit the width of text content */
    margin-right: 2rem; /* Add spacing between content and image */
  }

  .title {
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: 1rem;
  }

  .content h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.6; /* Add line spacing for headings */
  }

  .content p {
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.8; /* Add line spacing for paragraphs */
  }

  .image-wrapper img {
    width: 55%; /* Increase image size */
    height: auto;
    border-radius: 10px;
    margin-left: 15%; /* Shift image more to the right */
  }

  .services-icon {
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  .services-icon a {
    color: white;
    transition: transform 0.3s;
  }

  .services-icon a:hover {
    transform: scale(1.2);
  }

  .box:hover {
    box-shadow: 0px 0px 20px 1px #ffbb763f;
    border: 1px solid rgba(255, 255, 255, 0.454);
  }

  /* Mobile Responsiveness */
  @media (max-width: 1024px) {
    .box {
      flex-direction: column; /* Stack content vertically */
      text-align: center; /* Center text on tablets */
    }

    .content {
      max-width: 100%; /* Full width for content */
      padding: 0 1rem; /* Add padding to content */
      margin-right: 0; /* Remove right margin */
    }

    .image-wrapper img {
      width: 80%; /* Make image smaller */
      margin-left: 0;
      margin-top: 1rem; /* Add margin between text and image */
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 1.5rem; /* Adjust title font size */
    }

    .content h2 {
      font-size: 1.3rem; /* Adjust heading font size */
    }

    .content p {
      font-size: 1rem; /* Adjust paragraph font size */
    }

    .image-wrapper img {
      width: 80%; /* Reduce image size further on tablets */
      margin-left: 0;
      margin-top: 1rem;
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 1.2rem; /* Adjust title font size for small screens */
    }

    .content h2 {
      font-size: 1.1rem; /* Adjust heading font size */
    }

    .content p {
      font-size: 0.9rem; /* Adjust paragraph font size */
    }

    .image-wrapper img {
      width: 90%; /* Make the image even smaller on very small screens */
      margin-left: 0;
    }
  }
`;

export default Card;
