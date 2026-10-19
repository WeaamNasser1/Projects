import React from "react";
import projectscss from "./Projects.module.css";
import eduImg from "../../assets/images/eduzone .jpg";
import businessImg from "../../assets/images/business.jpg";
import brandImg from "../../assets/images/brand store.jpg";

const projectsData = [
  {
    id: 1,
    title: "Education Website",
    image: eduImg,
    category: "Front-End Project",
    description:
      "A clean, fully responsive educational platform interface designed to display courses, educational tracks, and learning resources seamlessly across all screen sizes.",
    tech: ["HTML5", "CSS3", "Responsive Design"],
    github:
      "https://github.com/WeaamNasser1/Projects/tree/main/Project%20HTML%20%26CSS",
    demo: "https://eduzone-gules.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Home Page of Business Website(Landing Page)",
    image: businessImg,
    category: "Front-End Project",
    description:
      "A modern corporate & business landing page built with semantic HTML and custom CSS, focusing on professional branding, service highlights, and structured navigation.",
    tech: ["HTML5", "CSS3", "Flexbox / Grid", "Bootstrap"],
    github:
      "https://github.com/WeaamNasser1/Projects/tree/main/Business%20website",
    demo: "https://business-website-xi-five.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Home Page of Brand-Store Website(Landing Page)",
    image: brandImg,
    category: "Front-End Project",
    description:
      "A modern corporate & business landing page built with semantic HTML and custom CSS, focusing on professional branding, service highlights, and structured navigation.",
    tech: ["HTML5", "CSS3", "Flexbox / Grid", "Bootstrap"],
    github: "https://github.com/WeaamNasser1/Projects/tree/main/Brand%20Store",
    demo: "https://brand-store-alpha.vercel.app/",
    featured: true,
  },
];

function Projects() {
  return (
    <section className={`py-5 min-vh-100 ${projectscss.projectsPage}`}>
      <div className="container py-5">
        {/* Title & Header */}
        <div className="text-center mb-5">
          <span className={`text-uppercase fw-bold ${projectscss.subTitle}`}>
            My Work
          </span>
          <h1 className={`display-5 fw-bold mt-2 ${projectscss.mainTitle}`}>
            Featured Projects
          </h1>
          <p
            className={`mt-2 mx-auto ${projectscss.description}`}
            style={{ maxWidth: "600px" }}
          >
            A showcase of web applications and interactive front-end user
            interfaces I have built, emphasizing clean code, responsiveness, and
            functional UX.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {projectsData.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className={projectscss.projectCard}>
                <div className={projectscss.imageWrapper}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={projectscss.projectImage}
                  />
                </div>
                {/* Badge Category & Featured */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className={projectscss.categoryBadge}>
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className={projectscss.featuredBadge}>Featured</span>
                  )}
                </div>

                {/* Project Title & Description */}
                <h3 className={projectscss.cardTitle}>{project.title}</h3>
                <p className={projectscss.cardDescription}>
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="d-flex flex-wrap gap-2 mb-4 mt-auto">
                  {project.tech.map((tech, index) => (
                    <span key={index} className={projectscss.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="d-flex gap-3 pt-3 border-top border-secondary-subtle">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-sm ${projectscss.codeBtn}`}
                    >
                      <i className="bi bi-github me-1"></i> GitHub Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-sm ${projectscss.demoBtn}`}
                    >
                      <i className="bi bi-box-arrow-up-right me-1"></i> Live
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
