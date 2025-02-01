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
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <StyledWrapper>
      <header
        className={`cs_site_header header_style_2 cs_style_1 ${
          variant ? variant : ''
        } cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? 'cs_mobile_toggle_active' : ''
        } ${isSticky ? isSticky : ''}`}
      >
        <div className="cs_main_header">
          <div className="container-fluid">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link to="/" className="cs_site_branding">
                  <video
                    src="/assets/images/animation logo.mp4"
                    width="250"
                    height="70"
                    autoPlay
                    loop
                    muted
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
              <div className="">
                <button onClick={() => window.location.href = 'mailto:info@ssconsultant.com.pk'}>
                  info@ssconsultant.com.pk
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  header {
    background-color: black;
    color: white;
    transition: all 0.3s ease;
  }

  .cs_site_branding:hover {
    color: blue;
  }

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
    box-shadow: inset 0 0 10px rgba(179, 217, 249, 0.4), 0 0 9px 3px rgba(179, 217, 249, 0.1);
  }

  button:hover {
    color: #d9eaff;
    box-shadow: inset 0 0 10px rgba(179, 217, 249, 0.6), 0 0 9px 3px rgba(179, 217, 249, 0.2);
  }

  @media (max-width: 768px) {
    button {
      display: none;
    }
  }
`;
