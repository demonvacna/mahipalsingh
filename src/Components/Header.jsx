import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Footer from './Footer';
import {GiHamburgerMenu} from "react-icons/gi"; 
import { useState } from 'react';
import Overlay from './Overlay';
function Header() {
    const[open, setOpen]=useState(false);
    const handleClick = ()=>{
        setOpen(!open); 
    }
  return (
    <>
        <section className="header">
                <div className="container">
                    <div className="head-nav">
                        <Link to='/mahipalsingh'><h1 className='name'>Mahipal <span className='surname'>Singh</span></h1></Link>
                       <div className={open?"navigation close":"navigation"}>
                            <ul className="navlist">
                                <li className="navitem">
                                    <Link to='/experience'>Experience</Link>
                                </li>
                                <li className="navitem">
                                    <Link to='/skills'>Skills</Link>
                                </li>
                                <li className="navitem">
                                    <Link to='/projects'>Projects</Link>
                                </li>
                            </ul>
                            <div className="btns">
                                <a href='https://www.linkedin.com/in/mahipal-singh-parmar-6a7817120/' target="_blank" className="linkedin btn-nav">Linkedin</a>
                                <a href="https://github.com/demonvacna" target="_blank" className="github btn-nav">Github</a>
                                <a href="https://wa.me/917742889616" target="_blank" className="contect btn-nav">Contact me</a>
                            </div>
                       </div>
                       <p className='hamburger' onClick={handleClick}><GiHamburgerMenu /></p>
                    </div>
                </div>
            </section>
            <Outlet/>
            <Footer/>
            <Overlay click={handleClick} open={open}/>
    </>
  )
}

export default Header