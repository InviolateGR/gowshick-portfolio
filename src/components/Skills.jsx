import './Skills.css';

const Skills = () => {
  const skillList = [
    "C", "C++", "Python", "Arduino", "Embedded C", "Proteus", "ESP32",
    "Figma", "Canva", "UI/UX Design",
    "HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills & Tools</h2>
      <div className="skills-grid">
        {skillList.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
