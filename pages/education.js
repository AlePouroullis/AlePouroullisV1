import React, { useState } from "react";
import ReactPortal from '../components/react-portal.js';
import utilStyles from "../styles/util.module.css";
import styles from "../styles/education.module.css";
import courseData from '../public/courses.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import { defaultMetaTags } from '../core/constants';

function Modal({
  show,
  handleClick,
  longDescription,
  courseName,
  shortDescription,
}) {
  return show ? (
    <ReactPortal>
      <div className="modal-outer" onClick={handleClick}>
        <div className="modal-inner">
          <h3 className="course-name">{courseName}</h3>
          <button className="exit-button">
            <FontAwesomeIcon className="exit-icon" icon={faXmark} />
          </button>
          <p className="course-description-short">{shortDescription}</p>
          <hr className={`${utilStyles["line-break-normal"]}`} />
          <p className="course-description-long">{longDescription}</p>
        </div>
      </div>
    </ReactPortal>
  ) : (
    ""
  );
}

function CourseCard({ courseName, shortDescription, longDescription }) {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <>
      <li key={courseName} className={`course-card + ${utilStyles.card}`} onClick={handleClick}>
        <h4 className="course-name">{courseName}</h4>
        <p className="course-description-short">{shortDescription}</p>
      </li>
      <Modal
        show={show}
        longDescription={longDescription}
        handleClick={handleClick}
        courseName={courseName}
        shortDescription={shortDescription}
      />
    </>
  );
}

function DegreeInfo(props) {
  const {
    universityName,
    degreeType,
    degreeName,
    startYear,
    endYear,
    courses,
  } = props;
  return (
    <li>
      <h3 className={styles.heading3} style={{ display: "block" }}>
        {universityName}
      </h3>
      <span style={{ display: "block" }}>
        {degreeType}.&nbsp;{degreeName}
      </span>
      <div className="date-container">
        <FontAwesomeIcon
          icon={faCalendar}
          className={styles["calendar-icon"]}
        />
        <time dateTime={`${startYear}/${endYear}`}>
          {startYear}&ndash;{endYear}
        </time>
      </div>
      <ul className="course-cards-list">
        {courses.map((course) => (
          <CourseCard
            key={course.courseName}
            courseName={course.courseName}
            shortDescription={course.shortDescription}
            longDescription={course.longDescription}
          />
        ))}
      </ul>
    </li>
  );
}

function SpecializationInfo({ specializationName, organization, courses }) {
  return (
    <li key={specializationName}>
      <h3 className={styles.heading3}>{specializationName}</h3>
      <span style={{ display: "block" }}>{organization}</span>
      <ul className="course-cards-list">
        {courses.map((course) => (
          <CourseCard
            key={course.courseName}
            shortDescription={course.shortDescription}
            courseName={course.courseName}
          />
        ))}
      </ul>
    </li>
  );
}

export async function getStaticProps() { 
  return {
    props: {courseData: courseData}
  };
}

export default function EducationPage({ courseData }) {
  const yearDecoder = { 1: "First-year", 2: "Second-year", 3: "Third-year" };
  return (
    <>
      <Layout metaTags={defaultMetaTags} title="Education | Alé Pouroullis">
        <div className={`${utilStyles.container} ${utilStyles["float-in"]}`}>
          <h1>Education</h1>
          <section className="university">
            <h2>Tertiary</h2>
            <ul className={`${styles["main-list"]}`}>
              {courseData.degrees.map((degree) => {
                const courses = degree.courses;
                courses.sort(sortByYear);
                return (
                  <DegreeInfo
                    key={degree.name}
                    universityName={degree.universityName}
                    degreeType={degree.type}
                    degreeName={degree.degreeName}
                    startYear={degree.startYear}
                    endYear={degree.endYear}
                    courses={courses}
                  />
                );
              })}
            </ul>
          </section>
          <section className="courses">
            <h2>Courses</h2>
            <ul className={`${styles["main-list"]}`}>
              {courseData.specializations.map((specialization) => {
                return (
                  <SpecializationInfo
                    key={specialization.specializationName}
                    specializationName={specialization.specializationName}
                    organization={specialization.organization}
                    courses={specialization.courses}
                  />
                );
              })}
            </ul>
          </section>
        </div>
      </Layout>
    </>
  );
}

function sortByYear(a, b) {
  if (a.year < b.year) {
    return -1;
  } else if (a.year > b.year) {
    return 1;
  } else {
    return 0;
  }
}
