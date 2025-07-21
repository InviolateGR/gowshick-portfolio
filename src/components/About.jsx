import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
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
        <div className="about-image">
          <img src="/assets/profile.jpg" alt="Gowshick Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
