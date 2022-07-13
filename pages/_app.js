import "../styles/global.css";
import Head from 'next/head';
import Layout from "../components/layout"
import globaStyles from '../styles/global.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS 

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