import React, { Component } from 'react';

import OwlCarousel from 'react-owl-carousel';

const service_slide_3options = {
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ["<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,

        }
    },
};

const category_slide_options = {
    margin: 0,
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
            items: 2,
        },
        600: {
            items: 3,
        },
        700: {
            items: 4,
        },
        1000: {
            items: 5,

        }
    },
};


import Header from '../layouts/header';
import Breadcrumb from '../layouts/breadcrumb';
import AboutSidebar from '../layouts/about_sidebar';
import BestProduct from '../layouts/best_product';
import Footer from '../layouts/footer';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumb BreadcumbTitle="Genius" BreadcumbBigTitle="About Us" BreadcumbLinkText="about us" />

                <section id="about-page" className="about-page-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="about-us-content-item">
                                    <div className="about-gallery">
                                        <div className="about-gallery-img grid-1">
                                            <img src={require("../../assets/img/about/abt-2.jpg")} alt="" />
                                        </div>
                                        <div className="about-gallery-img grid-2">
                                            <img src={require("../../assets/img/about/abt-3.jpg")} alt="" />
                                        </div>
                                        <div className="about-gallery-img grid-2">
                                            <img src={require("../../assets/img/about/abt-4.jpg")} alt="" />
                                        </div>
                                    </div>

                                    < div className="about-text-item">
                                        <div className="section-title-2  headline text-left">
                                            <h2>We Are <span>Genius Course,</span> Online Course Since 1990</h2>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
								</p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
								</p>
                                    </div>

                                    < div className="course-teacher about-teacher-2">
                                        <div className="course-advantage about-teacher-2">
                                            <div className="section-title-2  headline text-left">
                                                <h2>Genius Course <span>Advantages</span></h2>
                                            </div>
                                            <OwlCarousel {...service_slide_3options} className="service-slide_3 owl-carousel">
                                                <div className="service-text-icon">
                                                    <div className="service-icon float-left">
                                                        <i className="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i>
                                                    </div>
                                                    <div className="service-text">
                                                        <h3 className="bold-font">The Power Of Education.</h3>
                                                        <p>Lorem ipsum dolor sit amet consectuerer adipiscing elit set diam nonnumynibh.</p>
                                                    </div>
                                                </div>
                                                <div className="service-text-icon">
                                                    <div className="service-icon float-left">
                                                        <i className="text-gradiant flaticon-clipboard-with-pencil"></i>
                                                    </div>
                                                    <div className="service-text">
                                                        <h3 className="bold-font">Best Online Education.</h3>
                                                        <p>Lorem ipsum dolor sit amet consectuerer adipiscing elit set diam nonnumynibh.</p>
                                                    </div>
                                                </div>
                                                <div className="service-text-icon">
                                                    <div className="service-icon float-left">
                                                        <i className="text-gradiant flaticon-list"></i>
                                                    </div>
                                                    <div className="service-text">
                                                        <h3 className="bold-font">Education For All Student.</h3>
                                                        <p>Lorem ipsum dolor sit amet consectuerer adipiscing elit set diam nonnumynibh.</p>
                                                    </div>
                                                </div>
                                                <div className="service-text-icon">
                                                    <div className="service-icon float-left">
                                                        <i className="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i>
                                                    </div>
                                                    <div className="service-text">
                                                        <h3 className="bold-font">The Power Of Education.</h3>
                                                        <p>Lorem ipsum dolor sit amet consectuerer adipiscing elit set diam nonnumynibh.</p>
                                                    </div>
                                                </div>
                                                <div className="service-text-icon">
                                                    <div className="service-icon float-left">
                                                        <i className="text-gradiant flaticon-clipboard-with-pencil"></i>
                                                    </div>
                                                    <div className="service-text">
                                                        <h3 className="bold-font">Best Online Education.</h3>
                                                        <p>Lorem ipsum dolor sit amet consectuerer adipiscing elit set diam nonnumynibh.</p>
                                                    </div>
                                                </div>
                                                <div className="service-text-icon">
                                                    <div className="service-icon float-left">
                                                        <i className="text-gradiant flaticon-list"></i>
                                                    </div>
                                                    <div className="service-text">
                                                        <h3 className="bold-font">Education For All Student.</h3>
                                                        <p>Lorem ipsum dolor sit amet consectuerer adipiscing elit set diam nonnumynibh.</p>
                                                    </div>
                                                </div>
                                                <div className="service-text-icon">
                                                    <div className="service-icon float-left">
                                                        <i className="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i>
                                                    </div>
                                                    <div className="service-text">
                                                        <h3 className="bold-font">The Power Of Education.</h3>
                                                        <p>Lorem ipsum dolor sit amet consectuerer adipiscing elit set diam nonnumynibh.</p>
                                                    </div>
                                                </div>
                                                <div className="service-text-icon">
                                                    <div className="service-icon float-left">
                                                        <i className="text-gradiant flaticon-clipboard-with-pencil"></i>
                                                    </div>
                                                    <div className="service-text">
                                                        <h3 className="bold-font">Best Online Education.</h3>
                                                        <p>Lorem ipsum dolor sit amet consectuerer adipiscing elit set diam nonnumynibh.</p>
                                                    </div>
                                                </div>
                                                <div className="service-text-icon">
                                                    <div className="service-icon float-left">
                                                        <i className="text-gradiant flaticon-list"></i>
                                                    </div>
                                                    <div className="service-text">
                                                        <h3 className="bold-font">Education For All Student.</h3>
                                                        <p>Lorem ipsum dolor sit amet consectuerer adipiscing elit set diam nonnumynibh.</p>
                                                    </div>
                                                </div>
                                            </OwlCarousel>
                                        </div>


                                        < div className="about-course-categori about-teacher-2">
                                            <div className="section-title-2  headline text-left">
                                                <h2>Course <span>Categories</span></h2>
                                            </div>
                                            <OwlCarousel {...category_slide_options} className="category-slide text-center owl-carousel">
                                                <div className="category-icon-title text-center">
                                                    <div className="category-icon">
                                                        <i className="text-gradiant flaticon-technology"></i>
                                                    </div>
                                                    <div className="category-title">
                                                        <h4>Responsive Website</h4>
                                                    </div>
                                                </div>

                                                <div className="category-icon-title text-center">
                                                    <div className="category-icon">
                                                        <i className="text-gradiant flaticon-app-store"></i>
                                                    </div>
                                                    <div className="category-title">
                                                        <h4>IOS Applications</h4>
                                                    </div>
                                                </div>

                                                <div className="category-icon-title text-center">
                                                    <div className="category-icon">
                                                        <i className="text-gradiant flaticon-artist-tools"></i>
                                                    </div>
                                                    <div className="category-title">
                                                        <h4>Graphic Design</h4>
                                                    </div>
                                                </div>

                                                <div className="category-icon-title text-center">
                                                    <div className="category-icon">
                                                        <i className="text-gradiant flaticon-business"></i>
                                                    </div>
                                                    <div className="category-title">
                                                        <h4>Marketing</h4>
                                                    </div>
                                                </div>

                                                <div className="category-icon-title text-center">
                                                    <div className="category-icon">
                                                        <i className="text-gradiant flaticon-dna"></i>
                                                    </div>
                                                    <div className="category-title">
                                                        <h4>Science</h4>
                                                    </div>
                                                </div>

                                                <div className="category-icon-title text-center">
                                                    <div className="category-icon">
                                                        <i className="text-gradiant flaticon-cogwheel"></i>
                                                    </div>
                                                    <div className="category-title">
                                                        <h4>Enginering</h4>
                                                    </div>
                                                </div>

                                                <div className="category-icon-title text-center">
                                                    <div className="category-icon">
                                                        <i className="text-gradiant flaticon-technology-1"></i>
                                                    </div>
                                                    <div className="category-title">
                                                        <h4>Photography</h4>
                                                    </div>
                                                </div>

                                                <div className="category-icon-title text-center">
                                                    <div className="category-icon">
                                                        <i className="text-gradiant flaticon-technology-2"></i>
                                                    </div>
                                                    <div className="category-title">
                                                        <h4>Mobile Application</h4>
                                                    </div>
                                                </div>
                                            </OwlCarousel>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                   <AboutSidebar />
                            </div>
                        </div>
                    </div>
                </section>
                <BestProduct productBG={true} />
                <Footer />
            </div>
        );
    }
}

export default AboutUs;