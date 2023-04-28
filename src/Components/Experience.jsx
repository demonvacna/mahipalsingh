import React from 'react'
import FBSPL from '../images/fbspllogo.svg'
import '../css/Experience.scss';

function Experience() {
  return (
    <>
      <section className="banner">
          <div className="container">
              <h1 className='title'>Experience</h1>
          </div>
      </section>  
      <section className="companies">
        <div className="container">
          <div className="company">
            <div className="experience-detail">
              <h3 className="company-name"> <span className='title'>Company-Name - </span> Cognus technology</h3>
              <p className="position"><span className='title'>Designation -</span> Executive HTML Developer</p>
              <p className="time-period"><span className='title'>Time - </span>04/10/2022 - 09/04/2023</p>
              <p className="detailed"><span className='title'>Description - </span> In Cognus, I have worked as a Executive HTML developer, I have created various web pages layout & styling by help of UI designs, I have experience of HTML & CSS along with SCSS.</p>
            </div>
          </div>
          <div className="company">
            <div className="experience-detail">
              <h3 className="company-name"> <span className='title'>Company-Name - </span> Fusion Business Solutions Pvt. Ltd.</h3>
              <p className="position"><span className='title'>Designation -</span> Senior Associate</p>
              <p className="time-period"><span className='title'>Time - </span>10/12/2018 - 13/07/2022</p>
              <p className="detailed"><span className='title'>Description - </span>In FBSPL, I was a virtual assistant. I've had experience providing operational support to a client in the USA who runs a financial firm that offers small and midsize business loans there.</p>
            </div>
          </div>
          </div>
      </section>
    </>
  )
}

export default Experience