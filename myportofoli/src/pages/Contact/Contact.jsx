import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import contactcss from './Contact.module.css';

import emailIcon from '../../assets/images/icons8-email-open-50.png';
import locationIcon from '../../assets/images/icons8-location-24.png';
import roleIcon from '../../assets/images/icons8-code-50.png';
import githubIcon from '../../assets/images/icons8-github-50.png';
import linkedinIcon from '../../assets/images/icons8-linkedin-50.png';

function Contact() {
  const form = useRef(); // مرجع الفورم عشان EmailJS يقرأ البيانات مباشرة
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // استبدلي القيم دي بالـ IDs الخاصة بحسابك في EmailJS
    const SERVICE_ID = 'service_req1824';
    const TEMPLATE_ID = 'template_vme446s';
    const PUBLIC_KEY = 'qZ941PgxYOlBtYjXo';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
          setError(false);
          setFormData({ name: '', email: '', subject: '', message: '' }); // تفريغ الفورم بعد الإرسال
      }, (error) => {
          console.log(error.text);
          setError(true);
          setSuccess(false);
      });
  };

  return (
    <section className={`py-5 min-vh-100 ${contactcss.contactPage}`}>
      <div className="container py-5">
        
        {/* Title & Header */}
        <div className="text-center mb-5">
          <span className={`text-uppercase fw-bold ${contactcss.subTitle}`}>Get In Touch</span>
          <h1 className={`display-5 fw-bold mt-2 ${contactcss.mainTitle}`}>
            Let's Work Together
          </h1>
          <p className={`mt-2 mx-auto ${contactcss.description}`} style={{ maxWidth: '550px' }}>
            Have a question, project proposal, or just want to say hi? Feel free to reach out to me anytime!
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          
          {/* الشمال: معلومات التواصل المباشرة */}
          <div className="col-lg-5">
            <div className={contactcss.infoCard}>
              <h3 className={contactcss.infoTitle}>Contact Information</h3>
              <p className={contactcss.infoDesc}>
                I’m always open to discussing new web development opportunities, creative ideas, or technical collaborations.
              </p>

              {/* Email */}
              <div className="d-flex align-items-center mb-4">
                <div className={contactcss.iconBox}>
                  <img src={emailIcon} alt="Email" className={contactcss.customIcon} />
                </div>
                <div>
                  <span className={contactcss.label}>Email</span>
                  <h6 className={contactcss.value}>weaamnres@gmail.com</h6>
                </div>
              </div>

              {/* Location */}
              <div className="d-flex align-items-center mb-4">
                <div className={contactcss.iconBox}>
                  <img src={locationIcon} alt="Location" className={contactcss.customIcon} />
                </div>
                <div>
                  <span className={contactcss.label}>Location</span>
                  <h6 className={contactcss.value}>Cairo, Egypt (Ain Shams University)</h6>
                </div>
              </div>

              {/* Role */}
              <div className="d-flex align-items-center">
                <div className={contactcss.iconBox}>
                  <img src={roleIcon} alt="Role" className={contactcss.customIcon} />
                </div>
                <div>
                  <span className={contactcss.label}>Role</span>
                  <h6 className={contactcss.value}>Front-End Developer</h6>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-5 pt-4 border-top border-secondary-subtle">
                <span className={contactcss.label}>Connect with me</span>
                <div className="d-flex gap-3 mt-2">
                  <a href="https://github.com/WeaamNasser" target="_blank" rel="noopener noreferrer" className={contactcss.socialBtn}>
                    <img src={githubIcon} alt="GitHub" className={contactcss.socialIcon} />
                  </a>
                  <a href="https://www.linkedin.com/in/weaam-behairy-529586371/" target="_blank" rel="noopener noreferrer" className={contactcss.socialBtn}>
                    <img src={linkedinIcon} alt="LinkedIn" className={contactcss.socialIcon} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* اليمين: نموذج إرسال الرسالة */}
          <div className="col-lg-7">
            <div className={contactcss.formCard}>
              <h3 className={contactcss.formTitle}>Send a Message</h3>
              
              {/* رسالة نجاح الإرسال */}
              {success && (
                <div className="alert alert-success mb-3" role="alert">
                  Thank you for reaching out! Your message has been sent successfully.
                </div>
              )}

              {/* رسالة خطأ في الإرسال */}
              {error && (
                <div className="alert alert-danger mb-3" role="alert">
                  Oops! Something went wrong, please try again later.
                </div>
              )}

              <form ref={form} onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className={contactcss.formLabel}>Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className={`form-control ${contactcss.formInput}`} placeholder="Weaam Nasser" />
                  </div>
                  <div className="col-md-6">
                    <label className={contactcss.formLabel}>Your Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className={`form-control ${contactcss.formInput}`} placeholder="name@example.com" />
                  </div>
                  <div className="col-12">
                    <label className={contactcss.formLabel}>Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className={`form-control ${contactcss.formInput}`} placeholder="Project Opportunity / Collaboration" />
                  </div>
                  <div className="col-12">
                    <label className={contactcss.formLabel}>Message</label>
                    <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required className={`form-control ${contactcss.formInput}`} placeholder="Write your message here..."></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button type="submit" className={`btn w-100 ${contactcss.submitBtn}`}>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;