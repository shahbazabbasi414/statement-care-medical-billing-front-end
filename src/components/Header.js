import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('mobile-nav-active', !isMobileMenuOpen);
  };

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('mobile-nav-active');
  };

  React.useEffect(() => {
    // Close the menu whenever the location changes
    handleLinkClick();
  }, [location]);

  return (
    <div>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <div className="sitename"><img src="assets/img/logo.png" alt="logo" /></div>
          </Link>
          <nav id="navmenu" className={`navmenu ${isMobileMenuOpen ? 'mobile-nav-active' : ''}`}>
            <ul>
              <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/about-us" onClick={handleLinkClick}>About Us</Link></li>
              <li className={`dropdown ${isDropdownOpen ? 'dropdown-active' : ''}`}>
                <a href="/services" onClick={handleDropdownToggle}><span>Services</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                <ul className={`${isDropdownOpen ? 'dropdown-active' : ''}`}>
                  <a href="/services#revenue-cycle-management" className="btn-get-started" onClick={handleLinkClick}>Revenue Cycle Management</a>
                  <a href="/services#medical-billing" className="btn-get-started" onClick={handleLinkClick}>Medical Billing</a>
                  <a href="/services#denial-management" className="btn-get-started" onClick={handleLinkClick}>Denial Management</a>
                  <a href="/services#patient-experience-managemen" className="btn-get-started" onClick={handleLinkClick}>Patient Experience Management</a>
                  <a href="/services#practice-management" className="btn-get-started" onClick={handleLinkClick}>Practice Management</a>
                  <a href="/services#medical-coding" className="btn-get-started" onClick={handleLinkClick}>Medical Coding</a>
                  <a href="/services#analytics-reporting" className="btn-get-started" onClick={handleLinkClick}>Analytics & Reporting</a>
                  <a href="/services#eligibility-management" className="btn-get-started" onClick={handleLinkClick}>Eligibility Management</a>
                  <a href="/services#credentialing" className="btn-get-started" onClick={handleLinkClick}>Credentialing</a>
                </ul>
              </li>
              {/* <li><a href="#" onClick={handleLinkClick}>Blog</a></li> */}
              <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={handleMobileMenuToggle} />
          </nav>
          <div>
            <button type="button" className="btn btn-info">
              <a href="/contact" style={{ color: 'black' }}>Get Started</a>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
