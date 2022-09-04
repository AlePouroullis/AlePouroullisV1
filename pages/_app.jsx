import "../styles/global.css";
import Head from "next/head";
import globaStyles from "../styles/global.css";
import educationStyles from "../styles/education.css";
import projectStyles from "../styles/projects.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS
// import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

// NProgress.configure({
//   minimum: 0.3,
//   easing: "ease",
//   speed: 800,
//   showSpinner: false,
// });

// Router.events.on("routeChangeStart", () => {
//   NProgress.start();
// });
// Router.events.on("routeChangeComplete", (url) => {
//   NProgress.done();
// });
// Router.events.on("routeChangeError", () => {
//   NProgress.done();
// });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
