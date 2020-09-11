import React, { Component } from 'react';

class AboutSidebar extends Component {
    render() {
        return (
            <div>
                <div className="side-bar-widget first-widget">
                    <h2 className="widget-title text-capitalize"><span>Find A Course </span>&amp; Sign up Today.</h2>
                    <div className="course-img">
                        <img src={require("../../assets/img/teacher/ct-1.jpg")} alt="" />
                    </div>
                    <div className="course-desc">
                        <p>Lorem ipsum dolor sit  consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                    </div>
                    <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                        <a href="#">VIEW ONLINE COURSES <i className="fas fa-caret-right"></i></a>
                    </div>
                </div>

                <div className="side-bar-widget">
                    <h2 className="widget-title text-capitalize"><span>Related </span>News.</h2>
                    <div className="latest-news-posts">
                        <div className="latest-news-area">
                            <div className="latest-news-thumbnile relative-position">
                                <img src={require("../../assets/img/blog/lb-1.jpg")} alt="" />
                                <div className="hover-search">
                                    <i className="fas fa-search"></i>
                                </div>
                                <div className="blakish-overlay"></div>
                            </div>
                            <div className="date-meta">
                                <i className="fas fa-calendar-alt"></i> 26 April 2018
									</div>
                            <h3 className="latest-title bold-font"><a href="#">Affiliate Marketing A Beginner’s Guide.</a></h3>
                        </div>

                        <div className="latest-news-posts">
                            <div className="latest-news-area">
                                <div className="latest-news-thumbnile relative-position">
                                    <img src={require("../../assets/img/blog/lb-2.jpg")} alt="" />
                                    <div className="hover-search">
                                        <i className="fas fa-search"></i>
                                    </div>
                                    <div className="blakish-overlay"></div>
                                </div>
                                <div className="date-meta">
                                    <i className="fas fa-calendar-alt"></i> 26 April 2018
										</div>
                                <h3 className="latest-title bold-font"><a href="#">No.1 The Best Online Course 2018.</a></h3>
                            </div>
                        </div>

                        <div className="view-all-btn bold-font">
                            <a href="#">View All News <i className="fas fa-chevron-circle-right"></i></a>
                        </div>
                    </div>
                </div>

                <div className="side-bar-widget">
                    <h2 className="widget-title text-capitalize"><span>Featured</span> Course.</h2>
                    <div className="featured-course">
                        <div className="best-course-pic-text relative-position">
                            <div className="best-course-pic relative-position">
                                <img src={require("../../assets/img/blog/fb-1.jpg")} alt="" />
                                <div className="trend-badge-2 text-center text-uppercase">
                                    <i className="fas fa-bolt"></i>
                                    <span>Trending</span>
                                </div>
                            </div>
                            <div className="best-course-text">
                                <div className="course-title mb20 headline relative-position">
                                    <h3><a href="#">Fully Responsive Web Design &amp; Development.</a></h3>
                                </div>
                                <div className="course-meta">
                                    <span className="course-category"><a href="#">Web Design</a></span>
                                    <span className="course-author"><a href="#">250 Students</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutSidebar;