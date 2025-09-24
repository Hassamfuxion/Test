import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';
import styled from 'styled-components';

export default function HeaderStyle({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StickyHeaderWrapper $scrolled={isScrolled}>
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
              <div className="cs_main_header_left">
                <Link to="/" className="cs_site_branding" style={{ textDecoration: 'none' }}>
                  <video
                    src="/assets/images/animation logo.mp4"
                    width="220"
                    height="80"
                    autoPlay
                    loop
                    muted
                    style={{ width: '220px', height: '80px', display: 'block' }}
                  />
                </Link>
              </div>
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

// ✨ Sticky wrapper with scroll-aware styling
const StickyHeaderWrapper = styled.div`
  position: sticky;
  top: ${({ $scrolled }) => ($scrolled ? '16px' : '0')};
  z-index: 1000;
  margin: 0 auto;
  max-width: ${({ $scrolled }) => ($scrolled ? 'calc(100% - 32px)' : '100%')};
  border-radius: ${({ $scrolled }) => ($scrolled ? '16px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;

  header {
    background-color: black;
    color: white;
    transition: all 0.3s ease;
    box-shadow: ${({ $scrolled }) =>
      $scrolled ? '0 4px 20px rgba(0, 0, 0, 0.4)' : 'none'};
  }

  /* 🔥 Mobile: enforce black background everywhere */
  @media (max-width: 768px) {
    top: ${({ $scrolled }) => ($scrolled ? '12px' : '0')};
    max-width: ${({ $scrolled }) => ($scrolled ? 'calc(100% - 24px)' : '100%')};
    border-radius: ${({ $scrolled }) => ($scrolled ? '12px' : '0')};

    header,
    .cs_main_header,
    .cs_main_header_in,
    .cs_nav {
      background-color: black !important;
      color: white !important;
    }

    /* Ensure hamburger icon is visible */
    .cs-munu_toggle {
      background: transparent !important;
      border: none !important;
    }

    .cs-munu_toggle span {
      background-color: white !important;
      display: block;
      width: 24px;
      height: 2px;
      position: relative;
    }

    .cs-munu_toggle span::before,
    .cs-munu_toggle span::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 2px;
      background-color: white;
      left: 0;
    }

    .cs-munu_toggle span::before {
      top: -6px;
    }

    .cs-munu_toggle span::after {
      bottom: -6px;
    }

    /* Hide email button on mobile */
    .cs_main_header_right {
      display: none;
    }
  }
`;

// Styled email button
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