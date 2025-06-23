import '../styles/globals.css';
import '../styles/components.css';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;