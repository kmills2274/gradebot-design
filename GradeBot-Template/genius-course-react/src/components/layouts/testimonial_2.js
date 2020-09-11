import React, { Component } from 'react';

import OwlCarousel from 'react-owl-carousel';


const options = {
    margin: 85,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    autoplay: false,
    dots: false,
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
            items: 2,

        }
    },
};

class TestimonialTwo extends Component {
    render() {
        return (
            <section id="testimonial_2" className="testimonial_2_section">
                <div className="container">
                    <div className="testimonial-slide">
                        <div className="section-title-2 mb65 headline text-left">
                            <h2>Students <span>Testimonial.</span></h2>
                        </div>

                        <OwlCarousel {...options} id="testimonial-slide-item" className="testimonial-slide-area owl-carousel">
                            <div className="student-qoute">
                                <p>“This was our first time lorem ipsum and we <b> were very pleased with the whole experience</b>. Your price was lower than other companies. Our experience was good from start to finish, so we’ll be back in the future lorem ipsum diamet.”</p>
                                <div className="student-name-designation">
                                    <span className="st-name bold-font">Robertho Garcia </span>
                                    <span className="st-designation">Graphic Designer</span>
                                </div>
                            </div>

                            <div className="student-qoute">
                                <p>“This was our first time lorem ipsum and we <b> were very pleased with the whole experience</b>. Your price was lower than other companies. Our experience was good from start to finish, so we’ll be back in the future lorem ipsum diamet.”</p>
                                <div className="student-name-designation">
                                    <span className="st-name bold-font">Robertho Garcia </span>
                                    <span className="st-designation">Graphic Designer</span>
                                </div>
                            </div>

                            <div className="student-qoute">
                                <p>“This was our first time lorem ipsum and we <b> were very pleased with the whole experience</b>. Your price was lower than other companies. Our experience was good from start to finish, so we’ll be back in the future lorem ipsum diamet.”</p>
                                <div className="student-name-designation">
                                    <span className="st-name bold-font">Robertho Garcia </span>
                                    <span className="st-designation">Graphic Designer</span>
                                </div>
                            </div>

                            <div className="student-qoute">
                                <p>“This was our first time lorem ipsum and we <b> were very pleased with the whole experience</b>. Your price was lower than other companies. Our experience was good from start to finish, so we’ll be back in the future lorem ipsum diamet.”</p>
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

export default TestimonialTwo;