import './Projects.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const projects = [
  {
    title: "BoringGames Online",
    description:
      "An interactive web platform designed for users to play simple and engaging games when bored. Built 3 games with native HTML, CSS, and JavaScript.",
    work: "https://github.com/InviolateGR/BoringGames.git",
    demo: "https://inviolategr.github.io/BoringGames/"
  },
  {
    title: "Gradient Backgrounds",
    description:
      "A web-based gradient background generator that allows users to browse and rotate through predefined CSS gradients with real-time preview.",
    work: "https://github.com/InviolateGR/Background_Generator",
    demo: "https://inviolategr.github.io/Background_Generator/"
  },
    {
    title: "CampusNexus - UI/UX Case Study",
    description:
      "A role-based college ERP concept focused on reducing administrative friction and improving student/faculty experience through clear, task-first design.",
    work: "https://www.behance.net/gallery/240353899/Campus-Nexus-College-EPR-system-UI",
    demo: "https://www.figma.com/proto/mSl1K5oBf2idjMVC8WMBNH/CampusNexus-App-UI?page-id=34%3A2353&node-id=34-2354&p=f&viewport=214%2C-138%2C0.28&t=wYBvtEiyCMg3qJhK-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=34%3A2354"
  },
    {
    title: "Snap Music",
    description:
      "A concept for a modern music streaming application designed with a focus on intuitive UX using the integration of Spotify's Developer API.",
    work: "https://www.behance.net/gallery/238682545/Snap-Music",
    demo: "https://www.figma.com/design/SWAG2apb7TK0PXt1kYtw7J/SnapMusic-Webpage?node-id=132-463&t=lS1CPakQ7dxn4kaQ-1"
  },
  {
    title: "Admin's HUB",
    description:
      "A comprehensive recruitment management platform designed to streamline HR operations, candidate communication, and task management for modern recruitment teams.",
    work: "https://www.behance.net/gallery/238676519/Admins-Hub",
    demo: "https://www.figma.com/proto/PUl0y03JkjqD3qXlUsGoEl/ADMIN-sHUB?page-id=0%3A1&node-id=127-516&p=f&viewport=514%2C517%2C0.11&t=3jGaxMfd3Tfz0u8k-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=127%3A516&show-proto-sidebar=1"
  },
  {
    title: "UI/UX Redesign - Variac Electricals",
    description:
      "Redesigned an electrical site with UX principles using Figma and responsive layouts.",
    work: "#",
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
              <a href={project.work} target="_blank" rel="noreferrer">Work</a>
              <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
