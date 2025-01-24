import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const BenefitsSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("benefits-section");
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Show text when scrolled into view
        if (top < windowHeight - 100) {
          setShowText(true);
        }

        // Adjust gradient position based on scroll
        setScrollY(window.scrollY / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section id="benefits-section" scrollY={scrollY}>
      <GradientOverlay scrollY={scrollY} />
      <Container>
        <TextWrapper className={showText ? "visible" : ""}>
          <h1 className="typewriter">What Benefits Do You Gain</h1>
          <h1 className="typewriter">From Our ERP Solutions?</h1>
          <p>
            <span>Supply exceptional services, integrating markets and initiatives.</span>
          </p>
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
  height: 100vh;
  text-align: center;
  padding: 50px 20px;
  transition: all 0.5s ease-in-out;
  filter: ${({ scrollY }) => `blur(${scrollY / 50}px)`}; /* Blur effect based on scroll */
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to top, black, transparent);
  transform: ${({ scrollY }) => `translateY(${scrollY * 0.5}px)`}; /* Parallax gradient effect */
  transition: transform 0.3s ease-in-out;
`;

const Container = styled.div`
  max-width: 800px;
  z-index: 2;
  transition: all 0.5s ease-in-out;
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

  &.visible {
    opacity: 1;
    animation: ${fadeIn} 1s ease-out forwards;
  }

  .typewriter {
    font-size: 2rem;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid white;
    width: 0;
    display: inline-block;
    animation: ${typewriter} 2s steps(40, end) forwards;
  }

  p span {
    font-size: 14px;
    display: block;
    margin-top: 10px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  margin-top: 15px;
  line-height: 1.6;
`;

const Thumbnail = styled.div`
  margin-top: 20px;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const Icon = styled.div`
  margin-top: 20px;
  font-size: 24px;
  a {
    color: white;
    transition: transform 0.3s;
  }
  a:hover {
    transform: scale(1.2);
  }
`;

export default BenefitsSection;
