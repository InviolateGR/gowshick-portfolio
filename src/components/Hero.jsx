import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <h1>Hi, I’m Gowshick 👋</h1>
      <p>ECE Final Year Student | Embedded & IoT Developer | UI/UX Enthusiast</p>
      <div className="hero-buttons">
        <a href="#contact" className="btn-primary">Let's Connect</a>
        <a href="/Gowshick_Resume.pdf" className="btn-outline" download>Download Resume</a>
      </div>
    </section>
  );
};

export default Hero;
