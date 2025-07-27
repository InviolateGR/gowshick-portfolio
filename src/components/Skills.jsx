import './Skills.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const skillList = [
    "C", "C++", "Python", "Arduino", "Embedded C", "Proteus", "ESP32",
    "Figma", "Canva", "UI/UX Design",
    "HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <h2>Skills & Tools</h2>
      <div className="skills-grid">
        {skillList.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            custom={index}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
