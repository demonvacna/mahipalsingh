import React from 'react';
import '../css/Skills.scss';
import HTML from '../images/html.png';
import CSS from '../images/css.png';
import SCSS from '../images/SCSS.png';
import JS from '../images/javascript.png';
import JQ from '../images/jquery.png';
import RT from '../images/react-icon.png';
function Skills() {
  return (
    <>
      <section className="banner">
        <div className="container">
            <h1 className='title'>Skills</h1>
        </div>
      </section>
      <section className="skills">
        <div className="container">
            <div className="lang-list">
              <div className="lang">
                <img src={HTML} alt="HTML" className='lang-logo' />
                <div className="lang-detail">
                  <p className='lang-desc'>With 9 months of HTML experience, you have a strong understanding of its fundamentals and its role in web development. Creating basic web pages and structuring content with HTML tags are your strengths. You aim to focus on improving semantic markup, accessibility, optimizing website performance, and keeping up-to-date with new HTML standards and best practices to succeed in this constantly evolving field.</p>
                  <p className="lang-exp">9 Months experience</p>
                </div>
              </div>
              <div className="lang"><img src={CSS} alt="CSS" className='lang-logo' />
                <div className="lang-detail">
                  <p className='lang-desc'>As a CSS developer with 9 months experience, I possess a good understanding of styling basics, creating layouts, applying basic styles to elements, and targeting specific elements with CSS selectors. My aim is to improve my skills in advanced layout techniques, responsive design, and custom styles for different devices while keeping up-to-date with new features and best practices for enhanced user experience.</p>
                  <p className="lang-exp">9 Months experience</p>
                </div></div>
              <div className="lang"><img src={SCSS} alt="SCSS" className='lang-logo' />
                <div className="lang-detail">
                  <p className='lang-desc'>As an experienced SCSS developer, I can use variables, mixins, and nesting to write efficient and maintainable CSS code. I aim to improve my skills by mastering advanced SCSS techniques such as loops and functions. Staying up-to-date with the latest features and best practices in SCSS is important to create scalable and efficient CSS code, which is necessary in today's web development industry.</p>
                  <p className="lang-exp">9 Months experience</p>
                </div></div>
              <div className="lang"><img src={JS} alt="JS" className='lang-logo' />
                <div className="lang-detail">
                  <p className='lang-desc'>As a new JavaScript developer, I am learning the language's fundamentals, including variables, data types, loops, functions, conditionals, and DOM manipulation. I plan to advance to asynchronous programming and OOP. Regular practice and project-building will help me to improve my skills and stay current in the constantly evolving JavaScript ecosystem.</p>
                  <p className="lang-exp">1 Month experience</p>
                </div></div>
              <div className="lang"><img src={JQ} alt="JQ" className='lang-logo' />
                <div className="lang-detail">
                  <p className='lang-desc'>As a new jQuery developer, I'm mastering how to manipulate the DOM and simplify JavaScript code. With basic syntax and selectors, I can handle simple tasks like adding and removing classes, text, and events. Creating plugins and animations are next. Practice, project-building, and staying current are vital to enhance my skills and keep pace with updates in the jQuery ecosystem. </p>
                  <p className="lang-exp">Beginner</p>
                </div></div>
              <div className="lang"><img src={RT} alt="RT" className='lang-logo' />
                <div className="lang-detail">
                  <p className='lang-desc'>As a beginner React developer, I am learning how to build dynamic user interfaces using React. I understand the basics of components, JSX syntax, and virtual DOM manipulation. I can create simple applications and aim to learn advanced concepts like state management, component lifecycle, and API integration. Practicing and building projects is crucial to keep up with the latest updates.</p>
                  <p className="lang-exp">Beginner</p>
                </div></div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Skills