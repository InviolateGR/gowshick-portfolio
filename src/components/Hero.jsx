import './Hero.css';
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReveal(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <motion.section
      id="hero"
      className="hero-section"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <div className="hero-container">
        <div className={`hero-text-box ${reveal ? 'revealed' : ''}`}>
          <div className="hero-typewriter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Hey! This is Gowshick Raja").start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 81,
                cursor: '|',
              }}
            />
          </div>
        </div>
        <p className="hero-subtext">
          Electronics & Communication Engineering Student | Tech Enthusiast
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
