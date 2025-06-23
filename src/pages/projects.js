import Head from 'next/head';
import Projects from '../components/sections/Projects';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projets - Portfolio</title>
        <meta name="description" content="Découvrez tous mes projets de développement web" />
      </Head>
      
      <div className="page-container">
        <div className="page-header">
          <h1>Mes Projets</h1>
          <p>Une sélection de mes réalisations récentes</p>
        </div>
        <Projects />
      </div>
    </>
  );
}
