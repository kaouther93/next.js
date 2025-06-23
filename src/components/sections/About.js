const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Développeur web passionné avec plus de 3 ans d'expérience dans la création 
              d'applications web modernes et responsives.
            </p>
            <p>
              Je me spécialise dans le développement frontend avec React et Next.js, 
              tout en ayant une solide compréhension du backend avec Node.js.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Projets réalisés</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Années d'expérience</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies maîtrisées</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;