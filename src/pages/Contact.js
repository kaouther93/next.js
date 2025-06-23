import Head from 'next/head';
import Contact from '../components/sections/Contact';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Portfolio</title>
        <meta name="description" content="Contactez-moi pour discuter de votre projet" />
      </Head>
      
      <div className="page-container">
        <div className="page-header">
          <h1>Contact</h1>
          <p>Parlons de votre projet</p>
        </div>
        <Contact />
      </div>
    </>
  );
}
