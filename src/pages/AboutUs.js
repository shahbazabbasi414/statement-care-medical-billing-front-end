import React from 'react';

function AboutUs() {
  return (
    <div>
<main className="main">
  {/* Page Title */}
  <div className="page-title" data-aos="fade" style={{backgroundImage: 'url(assets/img/about-page-title-bg.jpg)'}}>
    <div className="container">
      <h1>About Us</h1>
    </div>
  </div>{/* End Page Title */}
  {/* About Section */}
  <section id="about" className="about section">
    <div className="container">
      <div className="row gy-4" data-aos="fade-up" data-aos-delay={100}>
        <div className="col-lg-5">
          <img src="assets/img/about.jpg" className="img-fluid" alt />
        </div>
        <div className="col-lg-7" data-aos="fade-up" data-aos-delay={200}>
          <div className="content">
            <h3>Having the statement care as your partner for billing and credentialing needs, means efficiency and accuracy.</h3>
            <p>
            We at the statement care pride ourselves on our meticulous attention to detail, which in return reduces inaccuracies and errors. 
            </p>
            <ul>
              <li><i className="bi bi-check-circle-fill" /> <span>Ensuring timely reimbursements for our clients.</span></li>
              <li><i className="bi bi-check-circle-fill" /> <span>Maximizing your revenue through efficient billing solutions.</span></li>
              <li><i className="bi bi-check-circle-fill" /> <span>Minimizing claim denials to ensure consistent cash flow.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /About Section */}
  <section id="why-us" className="why-us section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Why Choose Us</h2>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row g-0">
        <div className="col-xl-5 img-bg" data-aos="fade-up" data-aos-delay={100}>
          <img src="assets/img/why-us-bg.png" alt />
        </div>
        <div className="col-xl-7 slides position-relative" data-aos="fade-up" data-aos-delay={200}>
          <div className="swiper">
            <div className="swiper-wrapper">
                <div className="item">
                  <h3 className="mb-3">Let's grow your business together</h3>
                  <h4 className="mb-3">Having the statement care as your partner for billing and credentialing needs, means efficiency and accuracy. </h4>
                  <p>We at the statement care pride ourselves on our meticulous attention to detail, which in return reduces inaccuracies and errors. 
                  Ensuring timely reimbursements for our clients. 

                   Employees. 
                  Our employees bring years of experience in billing and credentialing.  Well- versed in the latest industry standards and practices. 

                  Personalized service : 
                  The statement care offers tailored solutions to meet your requirements and needs, as we understand each healthcare provider is unique. 
                  This guarantees that our clients receive the best service possible.</p>
                </div>
              </div>{/* End slide item */}
            </div>
            <div className="swiper-pagination" />
          </div>
          {/* <div className="swiper-button-prev" /> */}
          {/* <div className="swiper-button-next" /> */}
        </div>
      </div>
  </section>{/* /Why Us Section */}
    {/* Call To Action Section */}
    <section id="call-to-action" className="call-to-action section">
    <img src="assets/img/drcall.jpeg" alt />
    <div className="container">
      <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay={100}>
        <div className="col-xl-10">
          <div className="text-center">
            <h3>Call To Action</h3>
            <p>Call us 24/7 </p>
            <a className="cta-btn" href="tel:+19176902742">+1 (917) 690-2742</a>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Call To Action Section */}
  <section id="features" className="features section">
    <div className="container">
      <div className="row">
        <div className="col-lg-7" data-aos="fade-up" data-aos-delay={100}>
          {/* <h3 class="mb-0">Powerful Features for</h3> */}
          <h3>What Can We Do For You?​</h3>
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-eye" style={{color: '#ff8b2c'}} />
                <span>Above &amp; Beyond</span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-infinity" style={{color: '#5578ff'}} />
                <span>Improve Revenue by up to 15-20%</span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-mortarboard" style={{color: '#e80368'}} />
                <span>Reduce Account Receivable by up to 30%</span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-star" style={{color: '#ffa76e'}} />
                <span>Powerful Support</span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-x-diamond" style={{color: '#11dbcf'}} />
                <span>Strategic Advice</span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-camera-video" style={{color: '#4233ff'}} />
                <span>RCM Experts</span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-brightness-high" style={{color: '#29cc61'}} />
                <span>Analytics &amp; Reporting</span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-activity" style={{color: '#ff5828'}} />
                <span>Full Transparency</span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-activity" style={{color: '#ff5828'}} />
                <span>98% Clean Claims Rate
                </span>
              </div>
            </div>{/* End Icon List Item*/}
          </div>
        </div>
        <div className="col-lg-5 position-relative" data-aos="zoom-out" data-aos-delay={200}>
          <div className="phone-wrap">
            <img src="assets/img/p2p.png" alt="Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    <br />

    {/* Testimonials Section */}
<div className="container">
<div className="container section-title" data-aos="fade-up">
      <h2>Customer Assessment</h2>
    </div>{/* End Section Title */}
  <div className="row">
    <div className="col-md-4">
      <div className="card d-flex mx-auto">
        <div className="card-image">
          <img className="img-fluid d-flex mx-auto imgrew" src="https://i.imgur.com/3TlwnLF.jpg" />
        </div>
        <div className="card-text">
          <div className="card-title">Dr. Michael Anderson</div>
          Thanks to The Statement Care Medical Billing Services, our practice has recovered outstanding payments and improved revenue cycle management. Their expertise and attention to detail are exceptional. We can now focus more on our patients.
        </div>
        <div className="footer">
          <span id="name">Micheal Smith<br /></span>
          <span id="position">Orthopedic Surgeon</span>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card d-flex mx-auto">
        <div className="card-image">
          <img className="img-fluid d-flex mx-auto imgrew" src="https://i.imgur.com/Uz4FjGZ.jpg" />
        </div>
        <div className="card-text">
          <div className="card-title">Angellia Miller</div>
          The Statement Care Medical Billing Services has significantly improved our cash flow and reduced billing errors. Their proactive approach and support have made a huge difference in our operations.An invaluable partner for our practice!
        </div>
        <div className="footer">
          <span id="name">Angellia Miller<br /></span>
          <span id="position"> Office Manager at Harmony Women's Health </span>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card d-flex mx-auto ">
        <div className="card-image">
          <img className="img-fluid d-flex mx-auto imgrew" src="https://i.imgur.com/udGH5tO.jpg" />
        </div>
        <div className="card-text">
          <div className="card-title">Christina Williams</div>
          The Statement Care Medical Billing Services has revolutionized our billing process. We've seen fewer claim denials and faster payments, allowing us to focus on patient care. Their team is professional and responsive. Highly recommend!
        </div>
        <div className="footer">
          <span id="name">Christina Williams<br /></span>
          <span id="position">Practice Manager at Greenwood Family Clinic</span>
        </div>
      </div>
    </div>
  </div>
</div>

{/* /Testimonials Section */}

  </section>{/* /Features Section */}

</main>

    </div>
  );
}

export default AboutUs;
