import React from 'react'

const Footer = () => {
  return (
    <div>
{/* Footer Start */}
<footer id="footer" className="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-about">
          <a href="/" className="logo d-flex align-items-center">
          <div className="sitename"><img src="assets/img/logo.png" alt="logo" /></div>
          </a>
          <p>Having the statement care as your partner for billing and credentialing needs, means efficiency and accuracy.<br/>Our mission is to optimize the financial performance of medical practices,clinic and hospitals and focus on delivering excellence patient care</p>
          <div className="social-links d-flex mt-4">
            <a href="#" target="_blank" aria-label="Twitter"><i className="bi bi-twitter" /></a>
            <a href="https://www.facebook.com/profile.php?id=61561244021209&mibextid=LQQJ4d" target="_blank" aria-label="Facebook"><i className="bi bi-facebook" /></a>
            <a href="https://www.instagram.com/thestatementcare" target="_blank" aria-label="Instagram"><i className="bi bi-instagram" /></a>
            <a href="#" target="_blank" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
          </div>

        </div>
        <div className="col-lg-2 col-6 footer-links text-start">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-6 footer-links text-start ">
          <h4>Our Services</h4>
          <ul>
            <li><a href="/services#revenue-cycle-management">Revenue Cycle Management</a></li>
            <li><a href="/services#medical-billing">Medical Billing</a></li>
            <li><a href="/services#denial-management">Denial Management</a></li>
            <li><a href="/services#patient-experience-managemen">Patient Experience Management</a></li>
            <li><a href="/services#practice-management">Practice Management</a></li>
            <li><a href="/services#medical-codingt">Medical Coding</a></li>
            <li><a href="/services#analytics-reporting">Analytics & Reporting</a></li>
            <li><a href="/services#eligibility-management">Eligibility Management</a></li>
            <li><a href="/services#credentialing">Credentialing</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>307 west Parker rd </p>
          <p>Plummerville, AR 72127</p>
          <p>United States</p>
          <p className="mt-4"><strong>Phone:</strong> <span>+1 (917) 690-2742 / +1 (501) 777-5431</span></p>
          <p><strong>Email:</strong> <span>admin@thestatementcare.com</span></p>
        </div>
      </div>
    </div>
  </div>
  <div className="container copyright text-center">
    <p>© <span>Copyright</span> <strong className="px-1 sitename">The Statement Cares</strong> <span>All Rights Reserved</span></p>
    <div className="credits">
    Designed and Developed by <a href="https://shahbazriaz.online/">Shahbaz Riaz Abbasi</a>
    </div>
  </div>
</footer>

{/* Footer End */}

<div>
  {/* Scroll Top */}
  <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
  {/* Preloader */}
  {/* <div id="preloader" /> */}
</div>

    </div>
  )
}

export default Footer