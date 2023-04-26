import React from 'react';
import Map from './Map';

function Footer() {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="footer-detail">
                    <div className="navigation">
                            <p className="address">
                                <h2 className='title'>Address :-</h2>
                                Parmar Bhawan Hanuman Colony, Virafala vas, <br />
                                Mundara, Pali, Rajasthan, India <br />
                                Pincode - 306705
                            </p>
                            <p className="contact-detail">
                                <h2 className="title">Contact Me :-</h2>
                                <p className='phone'>Call me at : <a href="tel:+917742889616" className='tel'>+91 774-288-9616</a></p>
                                <p className='email'>Email me at : <a href="mailto:smahipal679@gmail.com" className='mailto'>smahipal679@gmail.com</a></p>
                            </p>
                    </div>
                    <div className="map">
                        <Map/>
                    </div>
                    </div>
                </div>
                <div className="footer-message">
                        <p className='copyright'>Copyright © 2023 Mahipal Singh. All rights reserved.</p>
                    </div>
            </section>
        </>
    )
}

export default Footer