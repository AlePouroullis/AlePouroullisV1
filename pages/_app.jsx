import "../styles/global.css";
import Head from 'next/head';
import globaStyles from '../styles/global.css';
import educationStyles from '../styles/education.css';
import projectStyles from '../styles/projects.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS 

export default function MyApp({ Component, pageProps }){
  return (
      <>
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        </Head>    

        <Component {...pageProps} />

      </>
  );
}