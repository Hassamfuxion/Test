import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';
import styled from 'styled-components';

export default function HeaderStyle({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`cs_site_header header_style_2 cs_style_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
      style={{
        backgroundColor: 'black', // Set background to black
        color: 'white', // Set text color to white
        transition: 'all 0.3s ease', // Smooth transition for hover effects
      }}
    >
      <div className="cs_main_header">
        <div className="container-fluid">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <Link
                to="/"
                className="cs_site_branding"
                style={{
                  transition: 'all 0.3s ease',
                  color: 'white', // Default text color
                  textDecoration: 'none', // Remove underline
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'blue'; // Hover color change
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'white'; // Revert color
                }}
                onFocus={(e) => {
                  e.target.style.color = 'blue'; // Focus color change
                }}
                onBlur={(e) => {
                  e.target.style.color = 'white'; // Revert color
                }}
              >
                <video
                  src="/assets/images/animation logo.mp4" // Updated video path
                  alt="Logo"
                  width="250" // Increased width
                  height="70" // Increased height
                  autoPlay
                  loop
                  muted
                  style={{
                    width: '220px', // Ensuring correct width
                    height: '80px', // Ensuring correct height
                    transition: 'all 0.3s ease',
                  }}
                />
              </Link>
            </div>
            <div className="cs_main_header_center">
              <div
                className="cs_nav cs_primary_font fw-medium"
                style={{
                  transition: 'all 0.3s ease',
                }}
              >
                <span
                  className={
                    mobileToggle
                      ? 'cs-munu_toggle cs_teggle_active'
                      : 'cs-munu_toggle'
                  }
                  onClick={() => setMobileToggle(!mobileToggle)}
                  style={{
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span></span>
                </span>
                <Nav setMobileToggle={setMobileToggle} />
              </div>
            </div>
            <div className="">
            <StyledWrapper>
  <button onClick={() => window.location.href = 'mailto:info@ssconsultant.com.pk'}>
    info@ssconsultant.com.pk
  </button>
</StyledWrapper>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const StyledWrapper = styled.div`
  button {
    --light-blue: #b3d9f9;  /* Lighter blue color */
    font-size: 15px;
    padding: 0.7em 2.7em;
    letter-spacing: 0.06em;
    position: relative;
    font-family: inherit;
    border-radius: 0.6em;
    overflow: hidden;
    transition: all 0.3s;
    line-height: 1.4em;
    border: 2px solid var(--light-blue);  /* Updated border color */
    background: linear-gradient(
      to right,
      rgba(179, 217, 249, 0.1) 1%,
      transparent 40%,
      transparent 60%,
      rgba(179, 217, 249, 0.1) 100%
    );
    color: var(--light-blue);  /* Updated text color */
    box-shadow: inset 0 0 10px rgba(179, 217, 249, 0.4), 0 0 9px 3px rgba(179, 217, 249, 0.1);
  }

  button:hover {
    color: #d9eaff;  /* Even lighter blue */
    box-shadow: inset 0 0 10px rgba(179, 217, 249, 0.6), 0 0 9px 3px rgba(179, 217, 249, 0.2);
  }

  button:before {
    content: "";
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform .4s ease-in-out;
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
      display: none;  /* Hides the button on mobile */
    }
  }
`;





