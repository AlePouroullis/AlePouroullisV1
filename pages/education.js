import React from 'react';
import Head from 'next/head';
import styles from '../styles/util.module.css';

function CourseCard({ courseName, courseDetails }) {
  return (
    <div className="course-card">
      <h1>{courseName}</h1>
      <p>{courseDetails}</p>
    </div>
  );
}

export default function EducationPage() {
  return (
    <>
      <Head>
        <title>Education | Alé Pouroullis</title>
      </Head>
      <div  className={`${styles.container} ${styles['float-in']}`}>
        <h1>Education</h1>
        <section className="university">
          <h2>University</h2>
          <ul className="universities-list">
            <li><span className="list-text">University of Cape Town</span>
              <ul className="sub-list">
                <li className="sub-list-item"><span className="sub-list-text"></span></li>
              </ul>
            </li>
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