import Card from '../ui/Card';
import Button from '../ui/Button';

const Projects = ({ limit }) => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Une plateforme e-commerce complète avec React et Node.js',
      image: '/images/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/username/project1',
      demo: 'https://project1-demo.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Application de gestion de tâches avec drag & drop',
      image: '/images/project2.jpg',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com/username/project2',
      demo: 'https://project2-demo.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard météorologique avec géolocalisation',
      image: '/images/project3.jpg',
      technologies: ['React', 'API REST', 'Chart.js', 'CSS Grid'],
      github: 'https://github.com/username/project3',
      demo: 'https://project3-demo.com'
    }
  ];

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projets récents</h2>
        <div className="projects-grid">
          {displayedProjects.map(project => (
            <Card key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <Button href={project.github} variant="outline" size="small">
                    GitHub
                  </Button>
                  <Button href={project.demo} variant="primary" size="small">
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        {limit && projects.length > limit && (
          <div className="projects-footer">
            <Button href="/projects" variant="primary">
              Voir tous les projets
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
