import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_zfgmd0g', 'template_3qm0lv7', e.target, 'u4EiNgak02C5AjR_R')
      .then((result) => {
          console.log(result.text);
          alert('Your message has been sent. Thank you!');
      }, (error) => {
          console.log(error.text);
          alert('Your message has been sent. Thank you so much! ');
      });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div>
<main className="main">
  {/* Hero Section */}
  <section id="hero" className="hero section">
    <img src="assets/img/hero-bg.jpg" alt data-aos="fade-in" />
    <div className="container">
      <div className="row">
        <div className="col-xl-4 text-start">
          <h1 data-aos="fade-up ">Where accuracy meets compassion</h1>
          <h1 data-aos="fade-up" style={{color: '#56b8e6'}}>TSC as low as 2.44%</h1>
          <blockquote data-aos="fade-up" data-aos-delay={100}>
            <p>Having the statement care as your partner for billing and credentialing needs, means efficiency and accuracy. </p>
          </blockquote>
          <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
            <a href="#contact" className="btn-get-started">Get Started</a>
            <a href="#" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle" /><span>Watch
                Video</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Hero Section */}
    {/* Contact Section */}
    <section id="contact" className="contact section">
          <div className="container position-relative" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-5">
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={200}>
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h3>Address</h3>
                    <p>307 west Parker rd Plummerville, AR 72127</p>
                  </div>
                </div>
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={300}>
                  <i className="bi bi-telephone flex-shrink-0" />
                  <div>
                    <h3>Call Us</h3>
                    <p>+1 (917) 690-2742 or +1 (501) 777-5431</p>
                  </div>
                </div>
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={400}>
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h3>Email Us</h3>
                    <p>thestatementc@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay={500}>
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
{/* /Contact Section */}
  {/* Why Us Section */}
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
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </div>
  </section>{/* /Why Us Section */}
  {/* Services Section */}
  <section id="services" className="services section">
    {/* Section Title */}
    <div className="container section-title " data-aos="fade-up">
      <h2>Our Services</h2>
      {/* <p>What We Do Here</p> */}
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={100}>
          <div className="icon flex-shrink-0"><img src="assets/img/icon/profit-1.png" alt style={{width: '50%'}} /></div>
          <div className='text-start'>
            <h4 className="title">Revenue Cycle Management</h4>
            <p className="description">Boost your bottom line and minimize administrative tasks.</p>
            <a href="/services#revenue-cycle-management" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={200}>
          <div className="icon flex-shrink-0"><img src="assets/img/icon/bill.png" alt style={{width: '50%'}} /></div>
          <div className='text-start'>
            <h4 className="title">Medical Billing</h4>
            <p className="description">Transform your finances with efficient medical billing solutions for a thriving practice.</p>
            <a href="/services#medical-billing" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={300}>
          {/* <div class="icon flex-shrink-0"><i class="bi bi-bar-chart" style="color: #d90769;"></i></div> */}
          <div className="icon flex-shrink-0"><img src="assets/img/icon/change.png" alt style={{width: '50%'}} /></div>
          <div className='text-start'>
            <h4 className="title">Denial Management</h4>
            <p className="description">At The Statement Care, we realize the role that denial management plays in a well-functioning revenue cycle. </p>
            <a href="/services#denial-management" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={400}>
          <div className="icon flex-shrink-0"><img src="assets/img/icon/patient.png" alt style={{width: '50%'}} /></div>
          <div className='text-start'>
            <h4 className="title">Patient Experience Management</h4>
            <p className="description">Enhance the patient journey with contemporary care.</p>
            <a href="patient-experience-managemen" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={500}>
          <div className="icon flex-shrink-0"><img src="assets/img/icon/dentist-tools.png" alt style={{width: '50%'}} /></div>
          <div className='text-start'>
            <h4 className="title">Practice Management</h4>
            <p className="description">Elevate your practice with our expert management solutions.</p>
            <a href="/services#practice-management" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={600}>
          <div className="icon flex-shrink-0"><img src="assets/img/icon/glove.png" alt style={{width: '50%'}} /></div>
          <div className='text-start'>
            <h4 className="title">Medical Coding</h4>
            <p className="description">Code smart, Bill smart with our medical coding services.</p>
            <a href="/services#medical-coding" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={600}>
          <div className="icon flex-shrink-0"><img src="assets/img/icon/analysis.png" alt style={{width: '50%'}} /></div>
          <div className='text-start'>
            <h4 className="title">Analytics &amp; Reporting</h4>
            <p className="description">Code smart, Bill smart with our medical coding services.</p>
            <a href="/services#analytics-reporting" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={600}>
          <div className="icon flex-shrink-0"><img src="assets/img/icon/competence.png" alt style={{width: '50%'}} /></div>
          <div className='text-start'>
            <h4 className="title">Eligibility Management</h4>
            <p className="description">Unleash the power of your data with actionable insights: Analytical &amp; Reporting Services.</p>
            <a href="/services#eligibility-management" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={600}>
          <div className="icon flex-shrink-0"><img src="assets/img/icon/glove.png" alt style={{width: '50%'}} /></div>
          <div className='text-start'>
            <h4 className="title">Credentialing</h4>
            <p className="description">Take your career to new heights with our trusted and effective Credentialing Services.</p>
            <a href="/services#credentialing" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
      </div>
    </div>
  </section>{/* /Services Section */}
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
  {/* Features Section */}
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
  )
}

export default Home