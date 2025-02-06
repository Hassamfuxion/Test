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
                <div className="loading-bar"></div> {/* Moving Progress Bar */}
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
    background: black; /* Default background is black */
    backdrop-filter: blur(10px);
    transition: all 0.3s ease-in-out;
    overflow: hidden;
  }

  .card:hover {
    background: transparent; /* On hover, background becomes transparent */
  }

  /* Moving Progress Bar */
  .loading-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--rounded);
    border: 4px solid transparent;
    background: linear-gradient(90deg, #ffffff, #00ccff, #0066ff, #ffffff);
    background-size: 300% 300%;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    animation: loadingProgress 3s linear infinite;
  }

  @keyframes loadingProgress {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
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

  .card:hover .content {
    background: transparent; /* When hovered, the content also becomes transparent */
  }

  .service-icon {
    width: 80px;
    height: 80px;
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
