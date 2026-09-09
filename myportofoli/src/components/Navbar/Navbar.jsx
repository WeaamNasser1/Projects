import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import navcss from './Navbar.module.css';

import profileImg from '../../assets/images/صورة.png'; 

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${navcss.customNav}`}>
      <div className="container d-flex align-items-center justify-content-between">
        
        {/* الجزء الشمال: الصورة الشخصية + الاسم + المسمى الوظيفي */}
        <Link className={`navbar-brand d-flex align-items-center gap-2 ${navcss.brand}`} to="/">
          <div className={navcss.avatar}>
            {/* 2. استخدام الصورة هنا بدلاً من النص */}
            <img src={profileImg} alt="Weaam Nasser" className={navcss.avatarImg} />
          </div>
          <div className="d-flex flex-column text-start">
            <span className={`fw-bold lh-1 ${navcss.nameText}`}>Weaam Nasser</span>
            <span className={navcss.roleText}>Front-End Developer</span>
          </div>
        </Link>

        {/* باقي الكود كما هو... */}
        <button
          className="navbar-toggler border-0 shadow-none text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className={`mx-auto ${navcss.navPillContainer}`}>
            <ul className="navbar-nav d-flex flex-row gap-2 gap-lg-3 justify-content-center m-0 p-1">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => `${navcss.pillLink} ${isActive ? navcss.activePill : ''}`}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects" className={({ isActive }) => `${navcss.pillLink} ${isActive ? navcss.activePill : ''}`}>Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => `${navcss.pillLink} ${isActive ? navcss.activePill : ''}`}>Contact</NavLink>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center justify-content-center gap-3 mt-3 mt-lg-0">
            <button className={navcss.themeBtn} onClick={toggleTheme} title="Toggle Theme" type="button">
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
            <Link to="/contact" className={`btn ${navcss.ctaBtn}`}>
              Get in touch <i className="bi bi-box-arrow-up-right ms-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;