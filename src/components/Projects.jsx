import './Projects.css';

const projects = [
  {
    title: "Smart Vehicle Black Box",
    description:
      "Logs accident data using sensors, GPS location, SD card storage, and uploads to cloud. Built for real-time event capture in road accidents.",
    github: "#",
    demo: "#"
  },
  {
    title: "Finance Tracker Web App",
    description:
      "A MERN stack-based personal finance tracker with authentication, dashboard charts using Recharts, and a clean UI.",
    github: "#",
    demo: "#"
  },
  {
    title: "UI/UX Redesign – Variac Electricals",
    description:
      "Redesigned a commercial electrical site using UX principles with Figma wireframes, interactive components, and mobile-friendly layout.",
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer">
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
