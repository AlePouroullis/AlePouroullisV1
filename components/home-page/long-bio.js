import styles from './long-bio.module.css';
import utilStyles from '../../styles/util.module.css';
import PropTypes from 'prop-types';

LongBio.propTypes = {
  animationDelayDuration: PropTypes.string.isRequired,
  floatIn: PropTypes.bool.isRequired
}

export default function LongBio({ animationDelayDuration, floatIn}) {
  return (
    <div style={{animationDelay: animationDelayDuration}} className={`long-bio ` + (floatIn ? `${utilStyles['float-in']}` : " ")}>
      {/* <h2 className="sub-heading">About me</h2> */}
      <h2 className={`${styles.welcome}`}>Welcome to my personal website! Here you can find a brief overview of me and the things I do, as well as some of my writings.
      </h2>
      <h2 className={`${utilStyles.heading} ${styles['no-margin-bottom']}`}>About Me</h2>
      <p className={``}>
        I&apos;m a first-year student living and studying in Cape Town, South Africa. On the side of my studies, I do programming – be it machine learning, web or software development.
        <br/><br/>
        I love working on projects, so long as they&apos;re interesting, accelerate personal growth, and, hopefully, provide some meaningful contribution, big or small, to the world. And in the process, I try my best to write code that is clean, maintainable, and functional.
        <br/><br/>
        Some of my recent work includes: type Ia supernovae classification as part of the evaluative task for the <a href="https://summerofcode.withgoogle.com/" target="_blank" rel="noopener noreferrer" className={`${styles['ext-link']}`}>Google Summer of Code programme</a>; crop yield prediction and speech emotion recognition as part of the <a target="_blank" rel="noopener noreferrer" href="https://www.loopqprize.ai/" className={`${styles['ext-link']}`}>Loop Q Prize competition</a>; and web development.
      </p>
    </div>
  );
}