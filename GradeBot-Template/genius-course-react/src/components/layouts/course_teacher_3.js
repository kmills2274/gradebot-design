import React, { Component } from 'react';

import OwlCarousel from 'react-owl-carousel';


const options = {
    margin: 30,
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
            items: 3,
        },
        1000: {
            items: 5,

        }
    },
};


const onePage = false;


class CourseTeacher3 extends Component {
    render() {
        return (
            <section id="genius-teacher-2" className={this.props.onePage === true ? 'genius-teacher-section-2 one-page-teacher backgroud-style' : 'genius-teacher-section-2'}>
                <div className="container">
                    <div className="section-title mb20  headline text-left">
                        <span className="subtitle ml42 text-uppercase">LEARN NEW SKILLS</span>
                        <h2><span>Popular</span> Teachers.</h2>
                    </div>
                    <OwlCarousel className="teacher-third-slide owl-carousel" {...options}>
                        <div className="teacher-double">
                            <div className="teacher-img-content relative-position">
                                <img src={require("../../assets/img/teacher/ts-1.jpg")} alt="" />
                                <div className="teacher-cntent">
                                    <div className="teacher-social-name ul-li-block">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                        <div className="teacher-name">
                                            <span>Daniel
										Alvares</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacher-category float-right">
                                    <span className="st-name">Mobile Apps </span>
                                </div>
                            </div>

                            <div className="teacher-img-content relative-position">
                                <img src={require("../../assets/img/teacher/ts-1.jpg")} alt="" />
                                <div className="teacher-cntent">
                                    <div className="teacher-social-name ul-li-block">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                        <div className="teacher-name">
                                            <span>Daniel
										Alvares</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacher-category float-right">
                                    <span className="st-name">Mobile Apps </span>
                                </div>
                            </div>
                        </div>

                        <div className="teacher-double">
                            <div className="teacher-img-content relative-position">
                                <img src={require("../../assets/img/teacher/ts-2.jpg")} alt="" />
                                <div className="teacher-cntent">
                                    <div className="teacher-social-name ul-li-block">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                        <div className="teacher-name">
                                            <span>Daniel
										Alvares</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacher-category float-right">
                                    <span className="st-name">Mobile Apps </span>
                                </div>
                            </div>

                            <div className="teacher-img-content relative-position">
                                <img src={require("../../assets/img/teacher/ts-3.jpg")} alt="" />
                                <div className="teacher-cntent">
                                    <div className="teacher-social-name ul-li-block">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                        <div className="teacher-name">
                                            <span>Daniel
										Alvares</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacher-category float-right">
                                    <span className="st-name">Mobile Apps </span>
                                </div>
                            </div>
                        </div>

                        <div className="teacher-double">
                            <div className="teacher-img-content relative-position">
                                <img src={require("../../assets/img/teacher/ts-4.jpg")} alt="" />
                                <div className="teacher-cntent">
                                    <div className="teacher-social-name ul-li-block">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                        <div className="teacher-name">
                                            <span>Daniel
										Alvares</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacher-category float-right">
                                    <span className="st-name">Mobile Apps </span>
                                </div>
                            </div>

                            <div className="teacher-img-content relative-position">
                                <img src={require("../../assets/img/teacher/ts-5.jpg")} alt="" />
                                <div className="teacher-cntent">
                                    <div className="teacher-social-name ul-li-block">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                        <div className="teacher-name">
                                            <span>Daniel
										Alvares</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacher-category float-right">
                                    <span className="st-name">Mobile Apps </span>
                                </div>
                            </div>
                        </div>

                        <div className="teacher-double">
                            <div className="teacher-img-content relative-position">
                                <img src={require("../../assets/img/teacher/ts-6.jpg")} alt="" />
                                <div className="teacher-cntent">
                                    <div className="teacher-social-name ul-li-block">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                        <div className="teacher-name">
                                            <span>Daniel
										Alvares</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacher-category float-right">
                                    <span className="st-name">Mobile Apps </span>
                                </div>
                            </div>
                            <div className="teacher-img-content relative-position">
                                <img src={require("../../assets/img/teacher/ts-2.jpg")} alt="" />
                                <div className="teacher-cntent">
                                    <div className="teacher-social-name ul-li-block">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                        <div className="teacher-name">
                                            <span>Daniel
										Alvares</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacher-category float-right">
                                    <span className="st-name">Mobile Apps </span>
                                </div>
                            </div>
                        </div>

                        <div className="teacher-double">
                            <div className="teacher-img-content relative-position">
                                <img src={require("../../assets/img/teacher/ts-3.jpg")} alt="" />
                                <div className="teacher-cntent">
                                    <div className="teacher-social-name ul-li-block">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                        <div className="teacher-name">
                                            <span>Daniel
										Alvares</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacher-category float-right">
                                    <span className="st-name">Mobile Apps </span>
                                </div>
                            </div>

                            <div className="teacher-img-content relative-position">
                                <img src={require("../../assets/img/teacher/ts-4.jpg")} alt="" />
                                <div className="teacher-cntent">
                                    <div className="teacher-social-name ul-li-block">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                        <div className="teacher-name">
                                            <span>Daniel
										Alvares</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacher-category float-right">
                                    <span className="st-name">Mobile Apps </span>
                                </div>
                            </div>
                        </div>

                        <div className="teacher-double">
                            <div className="teacher-img-content relative-position">
                                <img src={require("../../assets/img/teacher/ts-5.jpg")} alt="" />
                                <div className="teacher-cntent">
                                    <div className="teacher-social-name ul-li-block">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                        <div className="teacher-name">
                                            <span>Daniel
										Alvares</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacher-category float-right">
                                    <span className="st-name">Mobile Apps </span>
                                </div>
                            </div>

                            <div className="teacher-img-content relative-position">
                                <img src={require("../../assets/img/teacher/ts-6.jpg")} alt="" />
                                <div className="teacher-cntent">
                                    <div className="teacher-social-name ul-li-block">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                        <div className="teacher-name">
                                            <span>Daniel
										Alvares</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacher-category float-right">
                                    <span className="st-name">Mobile Apps </span>
                                </div>
                            </div>
                        </div>

                        <div className="teacher-double">
                            <div className="teacher-img-content relative-position">
                                <img src={require("../../assets/img/teacher/ts-1.jpg")} alt="" />
                                <div className="teacher-cntent">
                                    <div className="teacher-social-name ul-li-block">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                        <div className="teacher-name">
                                            <span>Daniel
										Alvares</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacher-category float-right">
                                    <span className="st-name">Mobile Apps </span>
                                </div>
                            </div>

                            <div className="teacher-img-content relative-position">
                                <img src={require("../../assets/img/teacher/ts-1.jpg")} alt="" />
                                <div className="teacher-cntent">
                                    <div className="teacher-social-name ul-li-block">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                        <div className="teacher-name">
                                            <span>Daniel
										Alvares</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacher-category float-right">
                                    <span className="st-name">Mobile Apps </span>
                                </div>
                            </div>
                        </div>

                        <div className="teacher-double">
                            <div className="teacher-img-content relative-position">
                                <img src={require("../../assets/img/teacher/ts-1.jpg")} alt="" />
                                <div className="teacher-cntent">
                                    <div className="teacher-social-name ul-li-block">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                        <div className="teacher-name">
                                            <span>Daniel
										Alvares</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacher-category float-right">
                                    <span className="st-name">Mobile Apps </span>
                                </div>
                            </div>
                            <div className="teacher-img-content relative-position">
                                <img src={require("../../assets/img/teacher/ts-1.jpg")} alt="" />
                                <div className="teacher-cntent">
                                    <div className="teacher-social-name ul-li-block">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                        <div className="teacher-name">
                                            <span>Daniel
										Alvares</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacher-category float-right">
                                    <span className="st-name">Mobile Apps </span>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        );
    }
}

export default CourseTeacher3;