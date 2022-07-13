import styles from './long-bio.module.css';

export default function LongBio() {
  return (
    <div className="long-bio">
      {/* <h2 className="sub-heading">About me</h2> */}
      <p className={`${styles.center}`}>Welcome to my personal website! Here you can find a brief overview of me and the things I do, as well as some of my writings.
      </p>
      <h2 className={styles.center}>About me</h2>
      <p className={`${styles.center}`}>
        I'm a first-year student living and studying in Cape Town, South Africa. As much as I enjoy my studies, I try maximize the spare time I have as much as possible to focus my attention towards hands-on projects. I'm a firm believer that if the time we have available to us is not being spent on growing or helping others in some way, then it's being wasted. And it's this spirit that has fueled the various independent endeavours I've been working towards.<br/><br/>
        The subject areas of the projects I work on are boundless; what matters is not the task itself, but what good it can bring about, whether big or small, and what new, fun challenges it presents.
        No matter the successes I achieve, I'll forever continue seeking new exciting undertakings.
        <br/><br/>
        Some of my recent work includes: type Ia supernovae classification as part of the evaluative task for the <a href="https://summerofcode.withgoogle.com/" target="_blank" rel="noopener noreferrer" className={`${styles['ext-link']}`}>Google Summer of Code programme</a>; the crop yield prediction speech emotion recognition tasks as part of the <a target="_blank" rel="noopener noreferrer" href="https://www.loopqprize.ai/" className={`${styles['ext-link']}`}>Loop Q Prize competition</a>; and web development.
      </p>
    </div>
  );
}