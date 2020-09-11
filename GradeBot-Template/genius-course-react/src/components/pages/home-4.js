import React from 'react';



import HeaderThree from '../layouts/header_3';
import Slider from '../layouts/slider';
import SearchCourse from '../layouts/search_course_3';
import PopularCourse from '../layouts/popular_course';
import AboutUs from '../layouts/about_us';
import WhyChooseUs from '../layouts/why_choose_3';
import LatestNews from '../layouts/latest_news';
import Sponsor from '../layouts/sponsor';
import BestCourse from '../layouts/best_course';
import CourseTeacher from '../layouts/course_teacher_3';
import BestProduct from '../layouts/best_product';
import FAQ from '../layouts/faq_2';
import Testimonial from '../layouts/testimonial_2';
import SearchCourseTwo from '../layouts/search_course_2';
import ContactForm from '../layouts/contact_form';
import ContactArea from '../layouts/contact_area';
import Footer from '../layouts/footer';



class HomeOne extends React.Component {
    render() {
        return (
            <div className="Genius-Course">
                <HeaderThree />
                <Slider />
                <SearchCourse />
                <PopularCourse GrayBg={true} />
                <WhyChooseUs />
                <AboutUs WhiteBg={true} />
                <BestCourse GrayBg={true} />
                <div className="about-course-categori one-page-category about-teacher-2">
                    <div className="container">
                        <div className="category-slide text-center owl-carousel">
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
                        </div>
                    </div>
                </div>
                <CourseTeacher onePage={true} />
                <LatestNews />
                <BestProduct />
                <SearchCourseTwo NoBg={true} />
                <FAQ />
                <Testimonial />
                <Sponsor SponsorClass="sponsor-section sponsor-1" SponsorTitle={true} SponsorNav={true}  />
                <ContactForm GrayBg={true} />
                <ContactArea />
                <Footer />

            </div>
        )
    }
};

export default HomeOne;

