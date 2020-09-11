import React, { Component } from 'react';


const contactinfo = [
    {
        icon: 'fas fa-map-marker-alt',
        primary: 'Last Vegas, 120 Graphic Street, US',
        second: 'Califorinia, 88 Design Street, US'
    },
    {
        icon: 'fas fa-phone',
        primary: '(100) 3434 55666',
        second: '(20) 323 434 1323'
    },
    {
        icon: 'fas fa-envelope',
        primary: 'info@geniuscourse.com',
        second: 'mail@mail.com'
    }

];

const contactinfoList = contactinfo.map((item) =>
    <div className="contact-address-details" key={item.icon}>
        <div className="address-icon relative-position text-center float-left">
            <i className={item.icon} />
        </div>
        <div className="address-details ul-li-block">
            <ul>
                <li>
                    <span>Primary: </span>{item.primary}
                </li>
                <li>
                    <span>Second: </span>{item.second}
                </li>
            </ul>
        </div>
    </div>
);

class ContactTwo extends Component {
    render() {
        return (
            <section id="contact_secound" className="contact_secound_section backgroud-style">
                <div className="container">
                    <div className="contact_secound_content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact-left-content">
                                    <div className="section-title  mb45 headline text-left">
                                        <span className="subtitle ml42  text-uppercase">CONTACT US</span>
                                        <h2><span>Get in Touch</span></h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet  ipsum dolor sit amet, consectetuer adipiscing elit.
									</p>
                                    </div>

                                    <div className="contact-address">
                                        {contactinfoList}
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="contact_secound_form">
                                    <div className="section-title-2 mb65 headline text-left">
                                        <h2>Send Us a message</h2>
                                    </div>
                                    <form className="contact_form" action="#" method="POST" encType="multipart/form-data">
                                        <div className="contact-info">
                                            <input className="name" name="name" type="text" placeholder="Your Name." />
                                        </div>
                                        <div className="contact-info">
                                            <input className="email" name="email" type="email" placeholder="Your Email" />
                                        </div>
                                        <textarea placeholder="Message."></textarea>
                                        <div className="nws-button text-center  gradient-bg text-capitalize">
                                            <button type="submit" value="Submit">SEND MESSAGE NOW <i className="fas fa-caret-right"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_2 backgroud-style">
                    <div className="container">
                        <div className="back-top text-center mb45">
                            <a className="scrollup" href="#"><img src={require("../../assets/img/banner/bt.png")} alt="" /></a>
                        </div>
                        <div className="footer_2_logo text-center">
                            <img src={require("../../assets/img/logo/logo.png")} alt="" />
                        </div>

                        <div className="footer_2_subs text-center">
                            <p>We take our mission of increasing global access to quality education seriously. </p>
                            <div className="subs-form relative-position">
                                <form action="#" method="post">
                                    <input className="course" name="course" type="email" placeholder="Email Address." />
                                    <div className="nws-button text-center  gradient-bg text-uppercase">
                                        <button type="submit" value="Submit">Subscribe now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="copy-right-menu">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="copy-right-text">
                                        <p>© 2020 - Designed & Developed by <a href="https://jthemes.com" title="Best Premium WordPress, HTML Template Store"> Jthemes Studio</a>. All rights reserved</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="footer-social  text-center ul-li">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="copy-right-menu-item float-right ul-li">
                                        <ul>
                                            <li><a href="#">License</a></li>
                                            <li><a href="#">Privacy & Policy</a></li>
                                            <li><a href="#">Term Of Service</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactTwo;