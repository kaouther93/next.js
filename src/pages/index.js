import Head from 'next/head';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Développeur Web</title>
        <meta name="description" content="Portfolio de développeur web spécialisé en React et Next.js" />
      </Head>
      
      <Hero />
      <About />
      <Skills />
      <Projects limit={3} />
      <Contact />
    </>
  );
}