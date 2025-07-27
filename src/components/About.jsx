import './About.css';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <motion.section
      id="about"
      className="about-section"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }}
    >
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m Gowshick, a final-year ECE student from Coimbatore. I specialize in Embedded Systems and IoT,
            and also enjoy working on creative UI/UX projects and web applications.
          </p>
          <p>
            I enjoy solving real-world problems by blending hardware with software, and am currently working on a
            smart vehicle black box system as my final year project.
          </p>
        </div>
        <div className="about-image"></div>
      </div>
    </motion.section>
  );
};

export default About;
