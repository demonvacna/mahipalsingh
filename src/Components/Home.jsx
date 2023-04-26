import React from 'react'
import mahi from '../images/young.png'
import circle from '../images/circle.png'

function Home() {
    return (
        <>
            {/* <Header/> */}
            <section className="banner">
                <div className="container">
                    <div className="banner-details">
                        <div className="left">
                            <img src={mahi} className="mahi" alt="Mahi" />
                            <img src={circle} className="circle" alt="circle" />
                        </div>
                        <div className="right">
                            <h2 className="hello">Hello, I Am</h2>
                            <h2 className="main">&lt; Mahipal <br />Singh / &gt;</h2>
                            <h2 className='detail'>Front-end Developer</h2>
                            <div className="time"><p className='timeperiod'><span className='count'>9</span><span className='time-detail'>Month of <br />experience</span></p>
                                <p className='timeperiod'><span className='count'>4</span><span className='time-detail'>Projects Completed <br />around the world</span></p> </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="container">
                    <h2 className="title">about_me( )</h2>
                    <div className="about-detail">
                        <p className="description-detail">I am a skilled Front End Web Developer seeking to utilize my expertise in a secure and professional growth-oriented organization. With my strong abilities in teamwork, multitasking, self-motivation, and adaptability, I am dedicated to providing innovative and flexible solutions. I have experience working as a Senior Associate at Fusion Business Solution Pvt Ltd, where I provided operational support to clients in the USA. I also have experience in handling, analyzing, checking, and reviewing documents. Currently, I am serving as an Executive HTML Developer at Cognus Technology and have experience in creating web pages' layouts and styling using UI. I am familiar with HTML, CSS, and SCSS, along with basic JavaScript concepts. I completed a Front End Web Development course from IANT Udaipur and hold a Bachelor's degree in Commerce from Pacific University. I have worked on personal projects like an Employee Management system in PHP, a Calculator with HTML CSS & JavaScript, and a web design in HTML CSS, among others. I won the title of Star Employee of the Month in October 2019 and have been nominated for it eight times. I am proficient in English, Hindi, and Gujarati.
                        </p>
                        <p className="frontend"><span>Front-end Developer &lt; / &gt;</span>
                            <a href='https://www.linkedin.com/in/mahipal-singh-parmar-6a7817120/' target="_blank" className='hireme'>Hire me</a>
                        </p>

                    </div>
                </div>
            </section>
            <section className="education">
                <div className="container">
                    <h2 className="title">education( )</h2>
                    <div className="timeline">
                        <div className="course">
                            <h3 className="school">Front End Development</h3>
                            <h4 className="field">Institute of advance network technology</h4>
                            <p className="expertise">As a proficient front-end developer, I am experienced in HTML, CSS, SCSS, JavaScript, and React. I excel in creating visually appealing and responsive web pages and applications that provide an exceptional user experience. My passion for staying up-to-date with industry trends and working collaboratively with colleagues makes me an asset to any team.</p>
                        </div>
                        <div className="course">
                            <h3 className="school">Bacholar in Commerce</h3>
                            <p className="field">Pacific University</p>
                            <p className="expertise">With my degree in commerce, I am well-equipped to pursue a career in a wide range of industries, from finance and accounting to sales and marketing. My strong communication skills and ability to work well in teams make me an asset to any organization, allowing me to collaborate effectively with colleagues and stakeholders to achieve shared goals.</p>
                        </div>
                        <div className="course">
                            <h3 className="school">12th Board</h3>
                            <p className="field">Rajasthan Board</p>
                            <p className="expertise">While my educational background is in commerce, I am eager to expand my knowledge and skills in new areas. I am a quick learner and passionate about staying up-to-date with the latest industry trends and best practices. I am excited to leverage my skills and experience to make a valuable contribution to a dynamic and innovative team.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home