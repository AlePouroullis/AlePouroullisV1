import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./profileCard.module.css";
import utilStyles from "../../styles/util.module.css";
import PropTypes from "prop-types";

Avatar.propTypes = {
  animationDelayDuration: PropTypes.string,
  floatIn: PropTypes.bool,
};

function Avatar({ animationDelayDuration, floatIn }) {
  const dimensions = 300;

  return (
    <Image
      style={{ animationDelay: animationDelayDuration }}
      className={
        "avatar-image " + (floatIn ? `${utilStyles["float-in"]}` : " ")
      }
      src="/images/close-up-smile-no-teeth.jpeg"
      alt="Picture of me"
      height={dimensions}
      width={dimensions}
    />
  );
}

function LinkIcon({ href, icon, className }) {
  return (
    <a
      className="link-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon className={className} icon={icon} />
    </a>
  );
}

ShortBio.propTypes = {
  animationDelayDuration: PropTypes.string,
  floatIn: PropTypes.bool,
};

function ShortBio({ animationDelayDuration, floatIn }) {
  return (
    <div
      style={{ animationDelay: animationDelayDuration }}
      className={`short-bio ` + (floatIn ? `${utilStyles["float-in"]}` : " ")}
    >
      <h1 className={`name-heading child ${styles.big}`}>
        Alexandros &#8216;Alé&#8217; Philippos Pouroullis
      </h1>
      <p
        className={`child ${styles.medium}`}
      >{`Hey 👋! I'm Alé – a machine learning and software engineering enthusiast, currently studying Computer Science and Applied Statistics at the University of Cape Town.`}</p>
      <div className="icon-strip child">
        <LinkIcon
          className="email-link"
          href="mailto:alexpouroullis123@gmail.com"
          icon={faEnvelope}
        />
        <LinkIcon
          className="linkedin-link"
          href="https://www.linkedin.com/in/alexandros-pouroullis-a105051b6/"
          icon={faLinkedinIn}
        />
        <LinkIcon
          className="github-link"
          href="https://github.com/AlePouroullis"
          icon={faGithub}
        />
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  avatarAnimationDelayDuration: PropTypes.string.isRequired,
  shortBioAnimationDelayDuration: PropTypes.string.isRequired,
  floatIn: PropTypes.bool.isRequired,
};

export default function ProfileCard({
  avatarAnimationDelayDuration,
  shortBioAnimationDelayDuration,
  floatIn,
}) {
  return (
    <div className="profile-card">
      <Avatar
        animationDelayDuration={avatarAnimationDelayDuration}
        floatIn={floatIn}
      />
      <ShortBio
        animationDelayDuration={shortBioAnimationDelayDuration}
        floatIn={floatIn}
      />
    </div>
  );
}
