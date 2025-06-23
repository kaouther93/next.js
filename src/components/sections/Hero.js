import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Bonjour, je suis <span className="highlight">Développeur Web</span>
          </h1>
          <p className="hero-description">
            Passionné par la création d'expériences web modernes et performantes 
            avec React, Next.js et les dernières technologies.
          </p>
          <div className="hero-buttons">
            <Button href="/projects" variant="primary">
              Voir mes projets
            </Button>
            <Button href="/contact" variant="secondary">
              Me contacter
            </Button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;