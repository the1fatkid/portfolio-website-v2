import experiences from '../data/experiences'

export default function Experience() {
  
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">-EXPERIENCE-</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="job-title">{exp.title}</h3>
                    <p className="company">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="duration">{exp.duration}</span>
                </div>

                <p className="job-description">{exp.description}</p>

                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>

                <div className="tech-stack">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}