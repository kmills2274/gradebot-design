import React, { Component } from 'react';

import Header from '../layouts/header';
import Breadcrumb from '../layouts/breadcrumb';
import AboutSidebar from '../layouts/about_sidebar';
import BestProduct from '../layouts/best_product';
import Footer from '../layouts/footer';

class Teacher extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumb BreadcumbTitle="Genius" BreadcumbBigTitle="Teacher" BreadcumbLinkText="Teacher" />

                <section id="teacher-page" className="teacher-page-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="teachers-archive">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-6">
                                            <div className="teacher-pic-content">
                                                <div className="teacher-img-content relative-position">
                                                    <img src={require("../../assets/img/teacher/mt-1.jpg")} alt="" />
                                                    <div className="teacher-hover-item">
                                                        <div className="teacher-social-name ul-li-block">
                                                            <ul>
                                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="teacher-text">
                                                            Lorem ipsum dolor  consectuer adipiscing elit, nonummy nibh euismod tincidunt.
												</div>
                                                    </div>
                                                    <div className="teacher-next text-center">
                                                        <a href="#"><i className="text-gradiant fas fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                                <div className="teacher-name-designation">
                                                    <span className="teacher-name">Daniel Alvares</span>
                                                    <span className="teacher-designation">Mobile Apps</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="teacher-pic-content">
                                                <div className="teacher-img-content relative-position">
                                                    <img src={require("../../assets/img/teacher/mt-2.jpg")} alt="" />
                                                    <div className="teacher-hover-item">
                                                        <div className="teacher-social-name ul-li-block">
                                                            <ul>
                                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="teacher-text">
                                                            Lorem ipsum dolor  consectuer adipiscing elit, nonummy nibh euismod tincidunt.
												</div>
                                                    </div>
                                                    <div className="teacher-next text-center">
                                                        <a href="#"><i className="text-gradiant fas fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                                <div className="teacher-name-designation">
                                                    <span className="teacher-name">Daniel Alvares</span>
                                                    <span className="teacher-designation">Mobile Apps</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="teacher-pic-content">
                                                <div className="teacher-img-content relative-position">
                                                    <img src={require("../../assets/img/teacher/mt-3.jpg")} alt="" />
                                                    <div className="teacher-hover-item">
                                                        <div className="teacher-social-name ul-li-block">
                                                            <ul>
                                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="teacher-text">
                                                            Lorem ipsum dolor  consectuer adipiscing elit, nonummy nibh euismod tincidunt.
												</div>
                                                    </div>
                                                    <div className="teacher-next text-center">
                                                        <a href="#"><i className="text-gradiant fas fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                                <div className="teacher-name-designation">
                                                    <span className="teacher-name">Daniel Alvares</span>
                                                    <span className="teacher-designation">Mobile Apps</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="teacher-pic-content">
                                                <div className="teacher-img-content relative-position">
                                                    <img src={require("../../assets/img/teacher/mt-4.jpg")} alt="" />
                                                    <div className="teacher-hover-item">
                                                        <div className="teacher-social-name ul-li-block">
                                                            <ul>
                                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="teacher-text">
                                                            Lorem ipsum dolor  consectuer adipiscing elit, nonummy nibh euismod tincidunt.
												</div>
                                                    </div>
                                                    <div className="teacher-next text-center">
                                                        <a href="#"><i className="text-gradiant fas fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                                <div className="teacher-name-designation">
                                                    <span className="teacher-name">Daniel Alvares</span>
                                                    <span className="teacher-designation">Mobile Apps</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="teacher-pic-content">
                                                <div className="teacher-img-content relative-position">
                                                    <img src={require("../../assets/img/teacher/mt-5.jpg")} alt="" />
                                                    <div className="teacher-hover-item">
                                                        <div className="teacher-social-name ul-li-block">
                                                            <ul>
                                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="teacher-text">
                                                            Lorem ipsum dolor  consectuer adipiscing elit, nonummy nibh euismod tincidunt.
												</div>
                                                    </div>
                                                    <div className="teacher-next text-center">
                                                        <a href="#"><i className="text-gradiant fas fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                                <div className="teacher-name-designation">
                                                    <span className="teacher-name">Daniel Alvares</span>
                                                    <span className="teacher-designation">Mobile Apps</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="teacher-pic-content">
                                                <div className="teacher-img-content relative-position">
                                                    <img src={require("../../assets/img/teacher/mt-6.jpg")} alt="" />
                                                    <div className="teacher-hover-item">
                                                        <div className="teacher-social-name ul-li-block">
                                                            <ul>
                                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="teacher-text">
                                                            Lorem ipsum dolor  consectuer adipiscing elit, nonummy nibh euismod tincidunt.
												</div>
                                                    </div>
                                                    <div className="teacher-next text-center">
                                                        <a href="#"><i className="text-gradiant fas fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                                <div className="teacher-name-designation">
                                                    <span className="teacher-name">Daniel Alvares</span>
                                                    <span className="teacher-designation">Mobile Apps</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="teacher-pic-content">
                                                <div className="teacher-img-content relative-position">
                                                    <img src={require("../../assets/img/teacher/mt-1.jpg")} alt="" />
                                                    <div className="teacher-hover-item">
                                                        <div className="teacher-social-name ul-li-block">
                                                            <ul>
                                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="teacher-text">
                                                            Lorem ipsum dolor  consectuer adipiscing elit, nonummy nibh euismod tincidunt.
												</div>
                                                    </div>
                                                    <div className="teacher-next text-center">
                                                        <a href="#"><i className="text-gradiant fas fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                                <div className="teacher-name-designation">
                                                    <span className="teacher-name">Daniel Alvares</span>
                                                    <span className="teacher-designation">Mobile Apps</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="teacher-pic-content">
                                                <div className="teacher-img-content relative-position">
                                                    <img src={require("../../assets/img/teacher/mt-2.jpg")} alt="" />
                                                    <div className="teacher-hover-item">
                                                        <div className="teacher-social-name ul-li-block">
                                                            <ul>
                                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="teacher-text">
                                                            Lorem ipsum dolor  consectuer adipiscing elit, nonummy nibh euismod tincidunt.
												</div>
                                                    </div>
                                                    <div className="teacher-next text-center">
                                                        <a href="#"><i className="text-gradiant fas fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                                <div className="teacher-name-designation">
                                                    <span className="teacher-name">Daniel Alvares</span>
                                                    <span className="teacher-designation">Mobile Apps</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="teacher-pic-content">
                                                <div className="teacher-img-content relative-position">
                                                    <img src={require("../../assets/img/teacher/mt-3.jpg")} alt="" />
                                                    <div className="teacher-hover-item">
                                                        <div className="teacher-social-name ul-li-block">
                                                            <ul>
                                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="teacher-text">
                                                            Lorem ipsum dolor  consectuer adipiscing elit, nonummy nibh euismod tincidunt.
												</div>
                                                    </div>
                                                    <div className="teacher-next text-center">
                                                        <a href="#"><i className="text-gradiant fas fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                                <div className="teacher-name-designation">
                                                    <span className="teacher-name">Daniel Alvares</span>
                                                    <span className="teacher-designation">Mobile Apps</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="teacher-pic-content">
                                                <div className="teacher-img-content relative-position">
                                                    <img src={require("../../assets/img/teacher/mt-4.jpg")} alt="" />
                                                    <div className="teacher-hover-item">
                                                        <div className="teacher-social-name ul-li-block">
                                                            <ul>
                                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="teacher-text">
                                                            Lorem ipsum dolor  consectuer adipiscing elit, nonummy nibh euismod tincidunt.
												</div>
                                                    </div>
                                                    <div className="teacher-next text-center">
                                                        <a href="#"><i className="text-gradiant fas fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                                <div className="teacher-name-designation">
                                                    <span className="teacher-name">Daniel Alvares</span>
                                                    <span className="teacher-designation">Mobile Apps</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="teacher-pic-content">
                                                <div className="teacher-img-content relative-position">
                                                    <img src={require("../../assets/img/teacher/mt-5.jpg")} alt="" />
                                                    <div className="teacher-hover-item">
                                                        <div className="teacher-social-name ul-li-block">
                                                            <ul>
                                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="teacher-text">
                                                            Lorem ipsum dolor  consectuer adipiscing elit, nonummy nibh euismod tincidunt.
												</div>
                                                    </div>
                                                    <div className="teacher-next text-center">
                                                        <a href="#"><i className="text-gradiant fas fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                                <div className="teacher-name-designation">
                                                    <span className="teacher-name">Daniel Alvares</span>
                                                    <span className="teacher-designation">Mobile Apps</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="teacher-pic-content">
                                                <div className="teacher-img-content relative-position">
                                                    <img src={require("../../assets/img/teacher/mt-6.jpg")} alt="" />
                                                    <div className="teacher-hover-item">
                                                        <div className="teacher-social-name ul-li-block">
                                                            <ul>
                                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="teacher-text">
                                                            Lorem ipsum dolor  consectuer adipiscing elit, nonummy nibh euismod tincidunt.
												</div>
                                                    </div>
                                                    <div className="teacher-next text-center">
                                                        <a href="#"><i className="text-gradiant fas fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                                <div className="teacher-name-designation">
                                                    <span className="teacher-name">Daniel Alvares</span>
                                                    <span className="teacher-designation">Mobile Apps</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="couse-pagination text-center ul-li">
                                        <ul>
                                            <li className="pg-text"><a href="#">PREV</a></li>
                                            <li><a href="#">01</a></li>
                                            <li><a href="#">02</a></li>
                                            <li className="active"><a href="#">03</a></li>
                                            <li><a href="#">04</a></li>
                                            <li><a href="#">...</a></li>
                                            <li><a href="#">15</a></li>
                                            <li className="pg-text"><a href="#">NEXT</a></li>
                                        </ul>
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

export default Teacher;