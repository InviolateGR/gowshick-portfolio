import './Resume.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Resume = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <motion.section
      id="resume"
      className="resume-section"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }}
    >
      
        <h2>Resume</h2>
        <p>You can view or download my latest resume below.</p>
        <a
          href="/assets/Gowshick_Resume.pdf"
          download
          className="btn-resume"
          >
          Download Resume
        </a>
      
    </motion.section>
  );
};

export default Resume;
