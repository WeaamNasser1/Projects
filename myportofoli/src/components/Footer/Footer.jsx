import React from 'react';
import { Link } from 'react-router-dom';
import footercss from './Footer.module.css';
import profileImg from '../../assets/images/صورة.png';

function Footer() {
  return (
    <footer className={`mt-auto py-5 ${footercss.customFooter}`}>
      <div className="container">
        <div className="row gy-4 align-items-start justify-content-between">
          
          {/* 1. البروفايل والوصف */}
          <div className="col-md-4 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
              <div className={footercss.avatar}>
                <img src={profileImg} alt="Weaam Nasser" className={footercss.avatarImg} />
              </div>
              <div className="d-flex flex-column text-start">
                <span className={`fw-bold lh-1 ${footercss.nameText}`}>Weaam Nasser</span>
                <span className={footercss.roleText}>Front-End Developer</span>
              </div>
            </div>
            <p className={`small mb-0 ${footercss.desc}`}>
              Building responsive, clean, and user-friendly web interfaces.
            </p>
          </div>

          {/* 2. الروابط السريعة Quick Links */}
          <div className="col-md-3 text-center text-md-start">
            <h6 className={`fw-bold mb-3 ${footercss.sectionTitle}`}>Quick Links</h6>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
              <li>
                <Link to="/" className={footercss.footerLink}>Home</Link>
              </li>
             
              <li>
                <Link to="/projects" className={footercss.footerLink}>Projects</Link>
              </li>
              <li>
                <Link to="/contact" className={footercss.footerLink}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* 3. التواصل والشبكات */}
          <div className="col-md-4 text-center text-md-start">
            <h6 className={`fw-bold mb-3 ${footercss.sectionTitle}`}>Connect</h6>
            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
              <a
                href="https://github.com/WeaamNasser1/Projects"
                target="_blank"
                rel="noreferrer"
                className={footercss.socialBtn}
              >
                <i className="bi bi-github"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/weaam-behairy-529586371/"
                target="_blank"
                rel="noreferrer"
                className={footercss.socialBtn}
              >
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>

        </div>

        <hr className={`my-4 ${footercss.divider}`} />

        <div className="text-center">
          <p className={`small mb-0 ${footercss.copyright}`}>
            © {new Date().getFullYear()} Weaam Nasser. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;