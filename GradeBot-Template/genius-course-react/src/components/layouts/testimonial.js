import React, { Component } from 'react';


import OwlCarousel from 'react-owl-carousel';


const options = {
    margin: 10,
    responsiveClass: true,
    nav: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 1,
        },
        1000: {
            items: 1,

        }
    },
};

class Testimonial extends Component {
    render() {
        return (

            <section id="testimonial-secound" className="secound-testimoinial-section">
                <div className="container">
                    <div className="testimonial-slide">
                        <div className="section-title mb35 headline text-center">
                            <span className="subtitle text-uppercase">WHAT THEY SAY ABOUT US</span>
                            <h2>Students <span>Testimonial.</span></h2>
                        </div>

                        <OwlCarousel {...options} className="testimonial-secound-slide-area owl-carousel">
                            <div className="student-qoute text-center">
                                <p>“This was our first time lorem ipsum and we <b> were very pleased with the whole experience</b>. Your price was lower than other companies. Our experience so we’ll be back in the future lorem ipsum diamet.”</p>
                                <div className="student-name-designation">
                                    <span className="st-name bold-font">Robertho Garcia </span>
                                    <span className="st-designation">Graphic Designer</span>
                                </div>
                            </div>

                            <div className="student-qoute text-center">
                                <p>“This was our first time lorem ipsum and we <b> were very pleased with the whole experience</b>. Your price was lower than other companies. Our experience so we’ll be back in the future lorem ipsum diamet.”</p>
                                <div className="student-name-designation">
                                    <span className="st-name bold-font">Robertho Garcia </span>
                                    <span className="st-designation">Graphic Designer</span>
                                </div>
                            </div>

                            <div className="student-qoute text-center">
                                <p>“This was our first time lorem ipsum and we <b> were very pleased with the whole experience</b>. Your price was lower than other companies. Our experience so we’ll be back in the future lorem ipsum diamet.”</p>
                                <div className="student-name-designation">
                                    <span className="st-name bold-font">Robertho Garcia </span>
                                    <span className="st-designation">Graphic Designer</span>
                                </div>
                            </div>

                            <div className="student-qoute text-center">
                                <p>“This was our first time lorem ipsum and we <b> were very pleased with the whole experience</b>. Your price was lower than other companies. Our experience so we’ll be back in the future lorem ipsum diamet.”</p>
                                <div className="student-name-designation">
                                    <span className="st-name bold-font">Robertho Garcia </span>
                                    <span className="st-designation">Graphic Designer</span>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>


        );
    }
}

export default Testimonial;