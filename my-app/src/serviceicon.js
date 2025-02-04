import React from 'react';
import styled from 'styled-components';

const Services = () => {
  const services = [
    { title: "Fabric Mastery", desc: "Achieve excellence in fabric handling, material planning, and cutting processes.", icon: "icongif25.gif" },
    { title: "Perfect Packaging", desc: "Ensure every product is packaged to perfection with our EPC tools.", icon: "icongif30.gif" },
    { title: "Global Logistics", desc: "Simplify shipping and manage global operations with ease.", icon: "icongif32.gif" },
    { title: "Fleet Excellence", desc: "Track and manage vehicles with advanced tools for maintenance and operations.", icon: "icongif33.gif" },
    { title: "Comprehensive Financial Management", desc: "Optimize financial operations with powerful analytics and automation.", icon: "icongif34.gif" },
    { title: "Seamless Order Processing", desc: "Streamline order workflows for faster and more efficient fulfillment.", icon: "icongif35.gif" },
    { title: "Advanced Project Management Tools", desc: "Enhance productivity with cutting-edge project management solutions.", icon: "icongif36.gif" },
    { title: "Real-Time Data Analytics", desc: "Gain insights with live data tracking and business intelligence tools.", icon: "icongif37.gif" },
    { title: "Integrated Supply Chain Management", desc: "Ensure smooth operations with end-to-end supply chain solutions.", icon: "icongif38.gif" }
  ];

  return (
    <ServicesContainer>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-lg-4" key={index}>
            <ServiceCard>
              <div className="card">
                <div className="content">
                  <div className="service-icon">
                    <img src={`assets/images/resource/${service.icon}`} alt={service.title} />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.desc}</p>
                  </div>
                </div>
              </div>
            </ServiceCard>
          </div>
        ))}
      </div>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.div`
  padding: 50px 20px;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ServiceCard = styled.div`
  .card {
    --border: 4px;
    --rounded: 16px;
    --w-card: 350px;
    --h-card: 400px;
    margin: 10px;
    width: var(--w-card);
    height: var(--h-card);
    max-width: 100%;
    border-radius: var(--rounded);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: var(--border);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    position: relative;
    background: linear-gradient(45deg, #00ccb1, #5ddcff, #3c67e3, #4e00c2); /* Gradient background */
  }

  /* This will change the card's background gradient on hover */
  .card:hover {
    background: linear-gradient(45deg, #a2c2ff, #0054a6); /* Light blue and dark blue gradient on hover */
  }

  .card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: 400% 400%;
    border-radius: var(--rounded);
    animation: gradientBorder 3s linear infinite;
    z-index: -1;
  }

  @keyframes gradientBorder {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0 0;
    }
  }

  .content {
    position: absolute;
    width: calc(100% - (var(--border) * 4));
    height: calc(100% - (var(--border) * 4));
    border-radius: calc(var(--rounded) - 4px);
    z-index: 7;
    background-color: black;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .service-icon {
    width: 80px; /* Increase size of the icon */
    height: 80px; /* Increase size of the icon */
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .service-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .service-title {
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
    text-align: center;
  }

  .service-desc {
    color: white;
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
  }
`;

export default Services;
