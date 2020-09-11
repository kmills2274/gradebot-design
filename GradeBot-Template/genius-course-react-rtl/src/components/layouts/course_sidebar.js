import React, { Component } from 'react';

class CourseSidebar extends Component {
    render() {
        return (
            <div className="side-bar">
                <div className="side-bar-widget  first-widget">
                    <h2 className="widget-title text-capitalize"><span>Find </span>Your Course.</h2>
                    <div className="listing-filter-form pb30">
                        <form action="#" method="get">
                            <div className="filter-select mb20">
                                <label>COURSE TYPE</label>
                                <select>
                                    <option value="9" selected="">All Categories </option>
                                    <option value="10">Default Listing</option>
                                    <option value="11">Category Listing</option>
                                    <option value="12">Orderly Listing</option>
                                </select>
                            </div>

                            <div className="filter-select mb20">
                                <label>STUDY LAVEL</label>
                                <select>
                                    <option value="9" selected="">All Locations</option>
                                    <option value="10">Default Listing</option>
                                    <option value="11">Category Listing</option>
                                    <option value="12">Orderly Listing</option>
                                </select>
                            </div>
                            <div className="filter-search mb20">
                                <label>FULL TEXT</label>
                                <input type="text" className="" placeholder="Looking for?" />
                            </div>
                            <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                                <a href="#">FIND COURSES <i className="fas fa-caret-right"></i></a>
                            </div>
                        </form>

                    </div>
                </div>

                <div className="side-bar-widget">
                    <h2 className="widget-title text-capitalize"><span>Recent  </span>News</h2>
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
                    <h2 className="widget-title text-capitalize">Popular <span>Tag's.</span></h2>
                    <div className="tag-clouds ul-li">
                        <ul>
                            <li><a href="#">fruits</a></li>
                            <li><a href="#">veegetable</a></li>
                            <li><a href="#">juices</a></li>
                            <li><a href="#">natural food</a></li>
                            <li><a href="#">food</a></li>
                            <li><a href="#">bread</a></li>
                            <li><a href="#">natural</a></li>
                            <li><a href="#">healthy</a></li>
                        </ul>
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

export default CourseSidebar;