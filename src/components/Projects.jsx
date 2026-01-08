import './Projects.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const projects = [
  {
    title: "BoringGames Online",
    description:
      "An interactive web platform designed for users to play simple and engaging games when bored.",
    github: "https://github.com/InviolateGR/BoringGames.git",
    demo: "https://inviolategr.github.io/BoringGames/"
  },
  {
    title: "Finance Tracker Web App",
    description:
      "A MERN stack-based personal finance tracker with authentication and dashboard charts.",
    github: "https://github.com/InviolateGR/personal-finance-manager",
    demo: "#"
  },
  {
    title: "Gradient Backgrounds",
    description:
      "A web-based gradient generator that allows users to browse and rotate through predefined CSS gradients with real-time preview.
",
    github: "https://github.com/InviolateGR/Background_Generator",
    demo: "https://inviolategr.github.io/Background_Generator/"
  },
  {
    title: "UI/UX Redesign – Variac Electricals",
    description:
      "Redesigned an electrical site with UX principles using Figma and responsive layouts.",
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <motion.section
      id="projects"
      className="projects-section"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }}
    >
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
