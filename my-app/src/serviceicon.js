import React from 'react';
import styled from 'styled-components';

const Services = () => {
  const services = [
    { title: "Fabric Mastery", desc: "Achieve excellence in fabric handling, material planning, and cutting processes.", icon: "icongif25.gif" },
    { title: "Perfect Packaging", desc: "Ensure every product is packaged to perfection with our EPC tools.", icon: "icongif30.gif" },
    { title: "Global Logistics", desc: "Simplify shipping and manage global operations with ease.", icon: "icongif32.gif" },
    { title: "Fleet Excellence", desc: "Track and manage vehicles with advanced tools for maintenance and operations.", icon: "icongif33.gif" },
    { title: "Comprehensive Financial Management", desc: "Optimize financial operations with powerful analytics and automation.", icon: "icongif34.gif" },
    { title: "Seamless Order Processing", desc: "Streamline order workflows for faster and more efficient fulfillment.", icon: "icongif29.gif" },
    { title: "Advanced Project Management Tools", desc: "Enhance productivity with cutting-edge project management solutions.", icon: "icongif28.gif" },
    { title: "Real-Time Data Analytics", desc: "Gain insights with live data tracking and business intelligence tools.", icon: "icongif27.gif" },
    { title: "Integrated Supply Chain Management", desc: "Ensure smooth operations with end-to-end supply chain solutions.", icon: "icongif3.gif" }
  ];

  return (
    <ServicesContainer>
      {services.map((service, index) => (
        <ServiceCard key={index}>
          <div className="outer">
            <div className="dot" />
            <div className="card">
              <div className="ray" />
              <div className="service-content">
                <div className="service-icon">
                  <img src={`/assets/images/resource/${service.icon}`} alt={service.title} />
                </div>
                <div className="text">{service.title}</div>
                <div className="desc">{service.desc}</div>
              </div>
              <div className="line topl" />
              <div className="line leftl" />
              <div className="line bottoml" />
              <div className="line rightl" />
            </div>
          </div>
        </ServiceCard>
      ))}
    </ServicesContainer>
  );
};

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 40px 20px;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 30px 16px;
  }
`;

const ServiceCard = styled.div`
  width: 100%;
  max-width: 380px;

  .outer {
    width: 100%;
    aspect-ratio: 380 / 470; /* Maintain aspect ratio */
    border-radius: 20px;
    padding: 1px;
    background: radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d);
    position: relative;
    overflow: hidden;
  }

  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: rgb(6, 227, 243);
    box-shadow: 0 0 10px rgb(6, 81, 243);
    border-radius: 100px;
    z-index: 2;
    right: 10%;
    top: 10%;
  }

  .outer:hover .dot {
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0%, 100% {
      top: 10%;
      right: 10%;
    }
    25% {
      top: 10%;
      right: calc(100% - 35px);
    }
    50% {
      top: calc(100% - 30px);
      right: calc(100% - 35px);
    }
    75% {
      top: calc(100% - 30px);
      right: 10%;
    }
  }

  .card {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: solid 1px #202222;
    background: radial-gradient(circle 280px at 0% 0%, rgb(36, 76, 252), rgb(2, 4, 8));
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    color: #fff;
    padding: 24px;
    padding-top: 80px;

    @media (max-width: 768px) {
      padding: 20px;
      padding-top: 70px;
    }
  }

  .ray {
    width: 180px;
    height: 40px;
    border-radius: 100px;
    position: absolute;
    background-color: rgb(199, 199, 199);
    opacity: 0.4;
    box-shadow: 0 0 40px #fff;
    filter: blur(8px);
    transform-origin: 10%;
    top: 0;
    left: 0;
    transform: rotate(40deg);

    @media (max-width: 768px) {
      width: 140px;
      height: 30px;
    }
  }

  .service-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 16px 0;
  }

  .service-icon {
    width: 120px;
    height: 120px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
    }
  }

  .service-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .text {
    font-size: 1.25rem;
    color: #fff;
    padding: 8px 0;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .desc {
    font-size: 0.85rem;
    color: #ccc;
    padding: 8px 0;
    line-height: 1.4;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: #2c2c2c;
  }

  .topl {
    top: 10%;
    background: linear-gradient(90deg, rgb(136, 136, 136) 30%, #1d1f1f 70%);
  }

  .bottoml {
    bottom: 5%;
  }

  .leftl {
    left: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #747474 30%, #222424 70%);
  }

  .rightl {
    right: 10%;
    width: 1px;
    height: 100%;
  }
`;

export default Services;