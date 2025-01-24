import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const BenefitsSection = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("benefits-section");
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100 && top > 0) {
          setShowText(false);
          setTimeout(() => setShowText(true), 150);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section id="benefits-section">
      <GradientOverlay />
      <Container>
        <TextWrapper className={showText ? "visible" : ""}>
          <h1 className={showText ? "typewriter" : ""}>What Benefits Do You Gain</h1>
          <h1 className={showText ? "typewriter" : ""}>From Our ERP Solutions?</h1>
          <p>Supply exceptional services, integrating markets and initiatives.</p>
          <Description>
            SS CONSULTANT offers a trusted and efficient Enterprise Resource Planning (ERP) solution, 
            FOCUS. Tailored for large, medium, and small-sized manufacturing and service industries, 
            it automates the entire organizational process. 
            Our key clients include government organizations, textile mills, garment factories, 
            printing presses, and other production units.
          </Description>
          <Thumbnail>
            <img src="assets/images/resource/servc-thumb.png" alt="ERP Solutions" />
          </Thumbnail>
          <Icon>
            <a href="./service">
              <i className="bi bi-arrow-right-short" />
            </a>
          </Icon>
        </TextWrapper>
      </Container>
    </Section>
  );
};

/* --- Styled Components --- */

const Section = styled.div`
  background: linear-gradient(to right, blue, black);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 80px 20px; /* Increased padding for better layout */
  transition: all 0.6s ease-in-out;
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 180px; /* Increased height for a smoother effect */
  background: linear-gradient(to top, black, transparent);
`;

const Container = styled.div`
  max-width: 900px;
  z-index: 2;
  padding: 30px; /* Added padding for better spacing */
  transition: all 0.6s ease-in-out;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`;

const typewriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const TextWrapper = styled.div`
  color: white;
  opacity: 0;
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  padding: 20px; /* Added padding for smooth spacing */

  &.visible {
    opacity: 1;
    animation: ${fadeIn} 1.2s ease-out forwards;
  }

  .typewriter {
    font-size: 2.2rem;
    overflow: hidden;
    white-space: nowrap;
    width: 0;
    display: inline-block;
    padding-bottom: 10px; /* Added spacing between lines */
    animation: ${typewriter} 2s ease-out forwards;
  }

  p {
    font-size: 16px;
    margin-top: 15px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin-top: 20px;
  line-height: 1.7;
  padding: 10px; /* Improved text readability */
`;

const Thumbnail = styled.div`
  margin-top: 25px;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    padding: 10px; /* Better spacing around the image */
  }
`;

const Icon = styled.div`
  margin-top: 25px;
  font-size: 26px;
  a {
    color: white;
    transition: transform 0.3s;
  }
  a:hover {
    transform: scale(1.2);
  }
`;

export default BenefitsSection;
