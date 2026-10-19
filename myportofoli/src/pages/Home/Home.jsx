import React from "react";
import { Link } from "react-router-dom";
import homecss from "./Home.module.css";

function Home() {
  return (
   <>
    <section
      className={`d-flex align-items-center ${homecss.heroSection}`}
    >
      <div className="container py-5">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6 text-center text-lg-start">
            {/* Status Badge */}
            <div
              className={`d-inline-flex align-items-center gap-2 mb-4 ${homecss.statusBadge}`}
            >
              <span className={homecss.greenDot}></span>
              <span>Available for work</span>
            </div>

            {/* Title & Role */}
            <h1 className={`display-3 fw-bold mb-2 ${homecss.heroTitle}`}>
              Weaam Nasser
            </h1>
            <h2 className={`h4 fw-medium mb-3 ${homecss.heroSub}`}>
              Front-End Developer
            </h2>

            {/* Brief Bio */}
            <p className={`mb-4 ${homecss.heroBio}`}>
              Computer Science Student & Front-End Developer, building
              responsive, user-friendly web applications using React.js, Modern
              JavaScript, and CSS.
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <Link to="/contact" className={`btn ${homecss.primaryBtn}`}>
                Contact Me
              </Link>

              <a
                href="/resume.pdf"
                download="Weaam_Nasser_CV.pdf"
                className={`btn ${homecss.secondaryBtn}`}
              >
                <i className="bi bi-download me-2"></i> Download CV
              </a>
            </div>
          </div>

          {/* اليمين: المربع البرمجي Code Card */}
          <div className="col-lg-6">
            <div className={homecss.codeCard}>
              <div className={homecss.cardHeader}>
                <span className={homecss.dotRed}></span>
                <span className={homecss.dotYellow}></span>
                <span className={homecss.dotGreen}></span>
              </div>
              <div className={homecss.cardBody}>
                <pre>
                  <code>
                    <span className={homecss.keyword}>const</span>{" "}
                    <span className={homecss.variable}>developer</span> = &#123;
                    {"\n"} <span className={homecss.property}>name</span>:{" "}
                    <span className={homecss.string}>'Weaam Nasser'</span>,
                    {"\n"} <span className={homecss.property}>role</span>:{" "}
                    <span className={homecss.string}>
                      'Front-End Developer'
                    </span>
                    ,{"\n"} <span className={homecss.property}>stack</span>: [
                    <span className={homecss.string}>'React'</span>,{" "}
                    <span className={homecss.string}>'JavaScript'</span>,{" "}
                    <span className={homecss.string}>'Bootstrap'</span>,{" "}
                    <span className={homecss.string}>'Html'</span>,
                    <span className={homecss.string}>'Css'</span>]{"\n"}{" "}
                    <span className={homecss.property}>location</span>:{" "}
                    <span className={homecss.string}>'Egypt'</span>,{"\n"}{" "}
                    <span className={homecss.property}>available</span>:{" "}
                    <span className={homecss.boolean}>true</span>
                    {"\n"}&#125;;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* About Section */}
{/* About Section */}
{/* About Section */}
<section className={`py-5 ${homecss.aboutSection}`}>
  <div className="container py-4">
    <div className="row align-items-center gy-4">
      
      {/* الشمال: الكلام والنصوص */}
      <div className="col-lg-7 pe-lg-5 order-2 order-lg-1">
        <span className={`text-uppercase fw-bold ${homecss.subTitle}`}>About Me</span>
        <h2 className={`display-6 fw-bold my-2 ${homecss.aboutTitle}`}>
          Computer Science Student & Front-End Developer
        </h2>
        
        <p className={`mt-3 ${homecss.aboutText}`}>
          I’m a Computer Science student at Ain Shams University with a strong focus on Web Development. I specialize in building responsive, modern user interfaces using React, JavaScript, Bootstrap, and Tailwind CSS.
        </p>  
        
        <p className={homecss.aboutText}>
          Beyond writing clean and scalable code, I am an active member in student activities—coordinating events and technical sessions, while collaborating on building real-world web applications and community projects.
        </p>

        {/* Highlight Tags */}
        <div className="d-flex flex-wrap gap-2 mt-4">
          <span className={homecss.tag}>Ain Shams University</span>
          <span className={homecss.tag}>React & React Router</span>
          <span className={homecss.tag}>Responsive UI</span>
          <span className={homecss.tag}>Clean Code</span>
        </div>
      </div>

      {/* اليمين: كروت الإحصائيات */}
      <div className="col-lg-5 order-1 order-lg-2">
        <div className="row g-3">
          <div className="col-6">
            <div className={homecss.statCard}>
              <h3 className={homecss.statNumber}>ASU</h3>
              <p className={homecss.statLabel}>Faculty of Computers & Information Science</p>
            </div>
          </div>
          <div className="col-6">
            <div className={homecss.statCard}>
              <h3 className={homecss.statNumber}>OSC</h3>
              <p className={homecss.statLabel}>Frontend Committee Member</p>
            </div>
          </div>
          <div className="col-6">
            <div className={homecss.statCard}>
              <h3 className={homecss.statNumber}>React</h3>
              <p className={homecss.statLabel}>Router & Modern Stack</p>
            </div>
          </div>
          <div className="col-6">
            <div className={homecss.statCard}>
              <h3 className={homecss.statNumber}>100%</h3>
              <p className={homecss.statLabel}>Pixel-Perfect & Responsive UI</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
{/* Tech Stack Section */}
<section className={`py-5 ${homecss.techSection}`}>
  <div className="container py-4">
    <div className="text-center mb-5">
      <span className={`text-uppercase fw-bold ${homecss.subTitle}`}>Tech Stack</span>
      <h2 className={`display-6 fw-bold mt-2 ${homecss.aboutTitle}`}>
        Technologies & Tools I Use
      </h2>
      <p className={`mt-2 ${homecss.aboutText}`}>
        Technologies I work with to build scalable and modern web interfaces.
      </p>
    </div>

    <div className="row g-4 justify-content-center">
      {/* React.js */}
      <div className="col-6 col-md-4 col-lg-3">
        <div className={homecss.techCard}>
          <i className={`bi bi-react ${homecss.techIcon}`}></i>
          <h5 className={homecss.techName}>React.js</h5>
          <span className={homecss.techCategory}>Frontend Library</span>
        </div>
      </div>
         {/* React Router */}
      <div className="col-6 col-md-4 col-lg-3">
        <div className={homecss.techCard}>
          <i className={`bi bi-signpost-split-fill ${homecss.techIcon}`}></i>
          <h5 className={homecss.techName}>React Router</h5>
          <span className={homecss.techCategory}>Routing & Navigation</span>
        </div>
      </div>

      {/* JavaScript */}
      <div className="col-6 col-md-4 col-lg-3">
        <div className={homecss.techCard}>
          <i className={`bi bi-filetype-js ${homecss.techIcon}`}></i>
          <h5 className={homecss.techName}>JavaScript (ES6+)</h5>
          <span className={homecss.techCategory}>Language</span>
        </div>
      </div>

   

      {/* HTML5 & CSS3 */}
      <div className="col-6 col-md-4 col-lg-3">
        <div className={homecss.techCard}>
          <i className={`bi bi-filetype-html ${homecss.techIcon}`}></i>
          <h5 className={homecss.techName}>HTML5 & CSS3</h5>
          <span className={homecss.techCategory}>Markup & Style</span>
        </div>
      </div>

      {/* Bootstrap */}
      <div className="col-6 col-md-4 col-lg-3">
        <div className={homecss.techCard}>
          <i className={`bi bi-bootstrap-fill ${homecss.techIcon}`}></i>
          <h5 className={homecss.techName}>Bootstrap</h5>
          <span className={homecss.techCategory}>UI Framework</span>
        </div>
      </div>

      {/* Git & GitHub */}
      <div className="col-6 col-md-4 col-lg-3">
        <div className={homecss.techCard}>
          <i className={`bi bi-git ${homecss.techIcon}`}></i>
          <h5 className={homecss.techName}>Git & GitHub</h5>
          <span className={homecss.techCategory}>Version Control</span>
        </div>
      </div>

      {/* Responsive Design */}
      <div className="col-6 col-md-4 col-lg-3">
        <div className={homecss.techCard}>
          <i className={`bi bi-display ${homecss.techIcon}`}></i>
          <h5 className={homecss.techName}>Responsive UI</h5>
          <span className={homecss.techCategory}>Design Strategy</span>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
}

export default Home;
