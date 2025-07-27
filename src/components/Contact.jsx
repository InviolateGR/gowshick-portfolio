import './Contact.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <motion.section
      id="contact"
      className="contact-section"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }}
    >
      <h2>Contact Me</h2>
      <p>You can reach out to me via the links below:</p>
      <div className="contact-links">
        <a href="mailto:gowshick@email.com">📧 gowshick@email.com</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">💼 LinkedIn</a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">🧑‍💻 GitHub</a>
      </div>
    </motion.section>
  );
};

export default Contact;
