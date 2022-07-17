import React from 'react';
import Head from 'next/head';
import utilStyles from '../styles/util.module.css';
import styles from '../styles/education.module.css';
import courseData from '../public/courses.json' assert {type: 'json'};
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

function CourseCard({ courseName, shortDescription }) {
  return (
    <>
      <dt>{courseName}</dt>
      <dd>{shortDescription}</dd>
    </>
  );
}

export default function EducationPage() {
  const yearDecoder = {1: "First-year", 2: "Second-year", 3: "Third-year"}
  return (
    <>
      <Head>
        <title>Education | Alé Pouroullis</title>
      </Head>
      <div  className={`${utilStyles.container} ${utilStyles['float-in']}`}>
        <h1>Education</h1>
        <section className="university">
          <h2>Tertiary</h2>
          <ul className={`${styles['main-list']}`}>
            {courseData.degrees.map(degree => {
            const courses = degree.courses;
            /* sort by year */
            courses.sort((a, b) => {
              if (a.year < b.year){
                return -1;
              } else if (a.year > b.year) { 
                return 1;
              } else {
                return 0;
              }
            })
            return (<li className={`${styles['main-list']}`} key={degree.    universityName}>
              <p>{degree.universityName}</p>
              <p>{degree.type}.&nbsp;{degree.name}</p>
              <div className="date">
                <FontAwesomeIcon icon={faCalendar}/>
                <date>{degree.startYear}-{degree.endYear}</date>
              </div>
              <dl>
                {courses.map(course => {
                  return (
                    <CourseCard key={course.name} courseName={course.name}
                      shortDescription={course.shortDescription}
                    /> 
                  );
                })}
              </dl>
              </li>);
            })
            }
          </ul>
        </section>
        <section className="courses">
          <h2>Courses</h2>
          <ul className="main-list">
            <li className="main-list-item">
              <span className="main-list-text">Mathematics for Machine Learning Specialization</span>
              <ul className="sub-list">
                <li className="sub-list-item"><span className="sub-list-text">Linear Algebra</span></li>
                <li className="sub-list-item"><span className="sub-list-text">Multivariable Calculus</span></li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}