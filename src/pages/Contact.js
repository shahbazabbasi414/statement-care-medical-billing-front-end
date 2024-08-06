import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/66a006bcbecc2fed6929866d/1i3ghkkim';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

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
        <div className="page-title" data-aos="fade" style={{ backgroundImage: 'url(assets/img/contact-page-title-bg.jpg)' }}>
          <div className="container">
            <h1>Contact</h1>
            <nav className="breadcrumbs"></nav>
          </div>
        </div>
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
      </main>
    </div>
  );
}

export default Contact;
