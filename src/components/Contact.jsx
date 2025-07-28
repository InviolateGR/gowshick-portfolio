import './Contact.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=gowshick@email.com";

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
      <p>Click an icon to reach out 👇</p>

      <div className="contact-links">
        <a href={gmailLink} target="_blank" rel="noreferrer" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
