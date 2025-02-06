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
      <div className="row">
        {services.map((service, index) => (
          <div className="col-lg-4" key={index}>
            <ServiceCard>
              <div className="card">
                <div className="content">
                  {/* GIF Icon centered and on top */}
                  <div className="service-icon">
                    <img src={`/assets/images/resource/${service.icon}`} alt={service.title} />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.desc}</p>
                  </div>
                </div>
                <div className="hover-border"></div> {/* Border hover effect */}
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
  justify-content: space-between;
  gap: 20px;  /* Adds space between the cards */
`;

const ServiceCard = styled.div`
  .card {
    --border: 4px;
    --rounded: 16px;
    --w-card: 500px;  /* Increased width */
    --h-card: 300px;  /* Decreased height */
    margin: 10px;
    width: var(--w-card);
    height: var(--h-card);
    max-width: 100%;
    border-radius: var(--rounded);
    display: flex;
    flex-direction: column;  /* Stack content vertically */
    align-items: center;
    justify-content: center;
    position: relative;
    padding: var(--border);
    background: transparent; /* Transparent background */
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
     padding:200px;
  }

  .card:hover {
  
    transform: scale(1.05);  /* Slightly enlarge card on hover */
  }

  .hover-border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--rounded);
    border: 4px solid #00ccff;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .card:hover .hover-border {
    opacity: 1;  /* Show the border when hovered */
  }

  .content {
    position: absolute;
    width: calc(100% - (var(--border) * 4));
    height: calc(100% - (var(--border) * 4));
    border-radius: calc(var(--rounded) - 4px);
    z-index: 7;
   
    padding: 20px;
    display: flex;
    flex-direction: column;  /* Align elements vertically */
    align-items: center;
    justify-content: center;
    text-align: center;  /* Center text */
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .service-icon {
    width: 120px;
    height: 120px;
    margin-bottom: 20px; /* Add spacing below the image */
    display: flex;
    align-items: center;
    
    justify-content: center;
  }

  .service-icon img {
    width: 100%;
    padding:10px;
    height: 100%;
    object-fit: contain;
  }

  .service-title {
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .service-desc {
    color: white;
    font-size: 14px;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    .card {
      width: 100%;
      height: auto;
    }
  }
`;

export default Services;
