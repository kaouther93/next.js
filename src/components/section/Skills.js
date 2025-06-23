const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'Next.js', level: 80, category: 'Frontend' },
    { name: 'CSS/SCSS', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'MongoDB', level: 70, category: 'Database' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'Figma', level: 65, category: 'Design' }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section className="skills">
      <div className="skills-container">
        <h2 className="section-title">Compétences</h2>
        <div className="skills-grid">
          {categories.map(category => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;