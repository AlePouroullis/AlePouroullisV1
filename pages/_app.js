import "../styles/global.css";
import Head from 'next/head';
import Layout from "../components/layout"
import globaStyles from '../styles/global.css';

export default function MyApp({ Component, pageProps }){

  return (
      <>
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        </Head>    
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
  );
}