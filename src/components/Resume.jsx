import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <p>You can view or download my latest resume below.</p>
      <a
        href="/assets/Gowshick_Resume.pdf"
        download
        className="btn-resume"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
