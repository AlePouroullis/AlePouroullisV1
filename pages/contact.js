import React from 'react';
import { faFile, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/layout';
import { defaultMetaTags } from '../core/constants';

import styles from '../styles/contact.module.css';
import utilStyles from '../styles/util.module.css';

export default function ContactPage() {
  const links = [
  {"type": "Email", "href":"mailto:alexpouroullis123@gmail.com", "icon": faEnvelope, "text": "alexpouroullis123@gmail.com"},
  {"type":"Github", "href": "https://github.com/AlePouroullis", "icon": faGithub, "text":"AlePouroullis"}, 
  {"type":"LinkedIn", "href": "https://www.linkedin.com/in/alexandros-pouroullis-a105051b6/", "icon": faLinkedinIn, "text":"alexandros-pouroullis-a105051b6"},
  {"type":"Resume", "href":"resume.pdf", "icon": faFile, "text": ".pdf"}];

  return (
    <>
      <Layout pageName="contact" metaTags={defaultMetaTags} title="Contact | Alé Pouroullis">
        <div style={{"--delay": "0s"}} className={`${styles.container} ${utilStyles['float-in']}`}>
          <h1 className={`${utilStyles.heading} ${styles.heading}`}>Contact</h1>
          <ul className={`${styles.list}`}>
            {links.map(link => {
              return (
                <li key={link.type} className={styles["list-item"]}>
                    <FontAwesomeIcon icon={faArrowRightLong} className={styles.arrow}/>
                    <FontAwesomeIcon icon={link.icon} className={styles.icon}/>
                    <span className={styles['link-text']}>{link.type}:</span>
        
                    <a href={link.href} className={styles.link} target="_blank" rel="noopener noreferrer">{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </Layout>
    </>
  );
}