import React from 'react';
import '../css/Projects.scss';

function Projects() {
  return (
    <>
      <section className="banner">
          <div className="container">
              <h1 className='title'>Projects</h1>
          </div>
      </section>
      <section className="projects">
          <div className="container">
              <div className="project-list">
                <div className="project-detail">
                  <h3 className='title'>Portfolio in React</h3>
                  <p className="project-desc">I have created a simple portfolio website by using  React.js, In this I have used Roboto font & classic colors which a programmer see in systems in his coding journey (green, black, offwhite.), I have used react-router-dom for navigate pages, & also attached some external of Github & my social media handles. </p>
                  <a href="https://github.com/demonvacna/mahipalsingh" target='_blank'>Click here</a>
                </div>
                <div className="project-detail">
                  <h3 className='title'>Employee Management system in PHP</h3>
                  <p className="project-desc">It was a official first project in web development journey which includes front end & back end together, I have learned basic of database management in SQL, & using Phpmyadmin</p>
                  <a href="https://github.com/demonvacna/Employee-Management-system" target='_blank'>Click here</a>
                </div>
                <div className="project-detail">
                  <h3 className='title'>Employee Management system in C++</h3>
                  <p className="project-desc">Create a simple employee management system by using basic C++ concepts like loops, conditions, switch statements. it was a beginning of my coding journey so, My mentor suggest me to do project in a hard language like C++ to clear basic concepts of programming.</p>
                  <a href="https://github.com/demonvacna/C-project-employee-Management-system" target='_blank' >Click here</a>
                </div>
                <div className="project-detail">
                  <h3 className='title'>Live projects</h3>
                  <p className="project-desc">I can't include the industial project in my portfolio as the company policies, I have worked on 7 different project for a product based company, those project has huge front end, I have learned so much from those project how to manage a big projects how work with local, beta & live project at same time.</p>
                  <a href="/" className='disable'>Click here</a>
                </div>
              </div>

          </div>
      </section>
    </>
  )
}

export default Projects