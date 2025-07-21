import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>You can reach out to me via the links below:</p>

      <div className="contact-links">
        <a href="mailto:gowshick@email.com">📧 gowshick@email.com</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
          💼 LinkedIn
        </a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
          🧑‍💻 GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
