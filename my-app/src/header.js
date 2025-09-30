import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';
import styled from 'styled-components';

export default function HeaderStyle({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsSticky(currentScrollPos > 50); // Add sticky class after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StickyHeaderWrapper $isSticky={isSticky}>
      <header
        className={`cs_site_header header_style_2 cs_style_1 ${
          variant || ''
        } cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? 'cs_mobile_toggle_active' : ''
        }`}
      >
        <div className="cs_main_header">
          <div className="container-fluid">
            <div className="cs_main_header_in">
              {/* Left: Logo */}
              <div className="cs_main_header_left">
                <Link
                  to="/"
                  className="cs_site_branding"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <img
                    src="https://github.com/Hassam990/synapse/blob/main/animationlogo-ezgif.com-cut.gif?raw=true"
                    alt="SS Consultant Logo"
                    style={{
                      width: '220px',
                      height: '80px',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </Link>
              </div>

              {/* Center: Nav */}
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>

              {/* Right: Button */}
              <div className="cs_main_header_right">
                <StyledWrapper>
                  <button
                    onClick={() =>
                      (window.location.href = 'mailto:info@ssconsultant.com.pk')
                    }
                  >
                    info@ssconsultant.com.pk
                  </button>
                </StyledWrapper>
              </div>
            </div>
          </div>
        </div>
      </header>
    </StickyHeaderWrapper>
  );
}

// Wrapper to handle sticky behavior + margin + radius
const StickyHeaderWrapper = styled.div`
  position: sticky;
  top: 16px; /* Top margin (adjust as needed) */
  z-index: 1000;
  margin: 0 auto;
  max-width: calc(100% - 32px); /* So it doesn't go edge-to-edge if you want padding */
  border-radius: 16px; /* Rounded corners */
  overflow: hidden;

  header {
    background-color: black;
    color: white;
    transition: all 0.3s ease;
    box-shadow: ${({ $isSticky }) =>
      $isSticky ? '0 4px 12px rgba(0,0,0,0.3)' : 'none'};
  }

  @media (max-width: 768px) {
    top: 8px;
    max-width: calc(100% - 16px);
    border-radius: 12px;
  }
`;

// Keep your existing StyledWrapper
const StyledWrapper = styled.div`
  button {
    --light-blue: #b3d9f9;
    font-size: 15px;
    padding: 0.7em 2.7em;
    letter-spacing: 0.06em;
    position: relative;
    font-family: inherit;
    border-radius: 0.6em;
    overflow: hidden;
    transition: all 0.3s;
    line-height: 1.4em;
    border: 2px solid var(--light-blue);
    background: linear-gradient(
      to right,
      rgba(179, 217, 249, 0.1) 1%,
      transparent 40%,
      transparent 60%,
      rgba(179, 217, 249, 0.1) 100%
    );
    color: var(--light-blue);
    box-shadow: inset 0 0 10px rgba(179, 217, 249, 0.4),
      0 0 9px 3px rgba(179, 217, 249, 0.1);
  }

  button:hover {
    color: #d9eaff;
    box-shadow: inset 0 0 10px rgba(179, 217, 249, 0.6),
      0 0 9px 3px rgba(179, 217, 249, 0.2);
  }

  button:before {
    content: '';
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(
      to right,
      transparent 1%,
      rgba(179, 217, 249, 0.1) 40%,
      rgba(179, 217, 249, 0.1) 60%,
      transparent 100%
    );
  }

  button:hover:before {
    transform: translateX(15em);
  }

  @media (max-width: 768px) {
    button {
      display: none;
    }
  }
`;
