import Head from 'next/head';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>À propos - Portfolio</title>
        <meta name="description" content="En savoir plus sur mon parcours et mes compétences" />
      </Head>
      
      <div className="page-container">
        <div className="page-header">
          <h1>À propos de moi</h1>
          <p>Découvrez mon parcours et mes compétences</p>
        </div>
        <About />
        <Skills />
      </div>
    </>
  );
}
