import React, { Component } from 'react';

import Header from '../layouts/header';
import Breadcrumb from '../layouts/breadcrumb';
import CourseSidebar from '../layouts/course_sidebar';
import RecentlyView from '../layouts/recently_view';
import Footer from '../layouts/footer';

class Course extends Component {

    componentDidMount() {
        $(".tab-content-1").hide();
        $(".tab-content-1:first").show();

        /* if in tab mode */
        $("ul.product-tab").on("click", "li", function () {

            $(".tab-content-1").hide();
            var activeTab = $(this).attr("rel");
            $("#" + activeTab).fadeIn();

            $("ul.product-tab li").removeClass("active");
            $(this).addClass("active");

            $(".tab_drawer_heading").removeClass("d_active");
            $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

        });
        /* if in drawer mode */
        $(".tab_drawer_heading").on("click", function () {

            $(".tab-content-1").hide();
            var d_activeTab = $(this).attr("rel");
            $("#" + d_activeTab).fadeIn();

            $(".tab_drawer_heading").removeClass("d_active");
            $(this).addClass("d_active");

            $("ul.product-tab li").removeClass("active");
            $("ul.product-tab li[rel^='" + d_activeTab + "']").addClass("active");
        });


        /* Extra class "tab_last" 
           to add border to right side
           of last tab */
        $('ul.product-tab li').last().addClass("tab_last");
    }
    
    render() {
        return (
            <div>
                <Header />
                <Breadcrumb BreadcumbTitle="Genius" BreadcumbBigTitle="Course" BreadcumbLinkText="Course" />

                <section id="course-page" className="course-page-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="short-filter-tab">
                                    <div className="shorting-filter  float-left">
                                        <span><b>View</b> By</span>
                                        <select>
                                            <option value="9">9 Course</option>
                                            <option value="10">7 Course</option>
                                            <option value="11">2 Course</option>
                                            <option value="12">0 Course</option>
                                        </select>
                                    </div>
                                    <div className="tab-button blog-button ul-li text-center float-right">
                                        <ul className="product-tab">
                                            <li className="active" rel="tab1"><i className="fas fa-th"></i></li>
                                            <li rel="tab2"> <i className="fas fa-list"></i></li>
                                        </ul>
                                    </div>
                                    <div className="shorting-filter float-right">
                                        <span><b>Sort</b> By</span>
                                        <select>
                                            <option value="9" selected="">Popularity</option>
                                            <option value="10">Most Read</option>
                                            <option value="11">Most View</option>
                                            <option value="12">Most Shared</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="genius-post-item">
                                    <div className="tab-container">
                                        <div id="tab1" className="tab-content-1 pt35">
                                            <div className="best-course-area best-course-v2">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="best-course-pic-text relative-position">
                                                            <div className="best-course-pic relative-position">
                                                                <img src={require("../../assets/img/course/bc-1.jpg")} alt="" />
                                                                <div className="trend-badge-2 text-center text-uppercase">
                                                                    <i className="fas fa-bolt"></i>
                                                                    <span>Trending</span>
                                                                </div>
                                                                <div className="course-price text-center gradient-bg">
                                                                    <span>$99.00</span>
                                                                </div>
                                                                <div className="course-rate ul-li">
                                                                    <ul>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="course-details-btn">
                                                                    <a href="#">COURSE DETAIL <i className="fas fa-arrow-right"></i></a>
                                                                </div>
                                                                <div className="blakish-overlay"></div>
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

                                                    <div className="col-md-4">
                                                        <div className="best-course-pic-text relative-position">
                                                            <div className="best-course-pic relative-position">
                                                                <img src={require("../../assets/img/course/bc-2.jpg")} alt="" />
                                                                <div className="course-price text-center gradient-bg">
                                                                    <span>$99.00</span>
                                                                </div>
                                                                <div className="course-rate ul-li">
                                                                    <ul>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="course-details-btn">
                                                                    <a href="#">COURSE DETAIL <i className="fas fa-arrow-right"></i></a>
                                                                </div>
                                                                <div className="blakish-overlay"></div>
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

                                                    <div className="col-md-4">
                                                        <div className="best-course-pic-text relative-position">
                                                            <div className="best-course-pic relative-position">
                                                                <img src={require("../../assets/img/course/bc-3.jpg")} alt="" />
                                                                <div className="course-price text-center gradient-bg">
                                                                    <span>$99.00</span>
                                                                </div>
                                                                <div className="course-rate ul-li">
                                                                    <ul>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="course-details-btn">
                                                                    <a href="#">COURSE DETAIL <i className="fas fa-arrow-right"></i></a>
                                                                </div>
                                                                <div className="blakish-overlay"></div>
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

                                                    <div className="col-md-4">
                                                        <div className="best-course-pic-text relative-position">
                                                            <div className="best-course-pic relative-position">
                                                                <img src={require("../../assets/img/course/bc-4.jpg")} alt="" />
                                                                <div className="course-price text-center gradient-bg">
                                                                    <span>$99.00</span>
                                                                </div>
                                                                <div className="course-rate ul-li">
                                                                    <ul>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="course-details-btn">
                                                                    <a href="#">COURSE DETAIL <i className="fas fa-arrow-right"></i></a>
                                                                </div>
                                                                <div className="blakish-overlay"></div>
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

                                                    <div className="col-md-4">
                                                        <div className="best-course-pic-text relative-position">
                                                            <div className="best-course-pic relative-position">
                                                                <img src={require("../../assets/img/course/bc-5.jpg")} alt="" />
                                                                <div className="course-price text-center gradient-bg">
                                                                    <span>$99.00</span>
                                                                </div>
                                                                <div className="course-rate ul-li">
                                                                    <ul>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="course-details-btn">
                                                                    <a href="#">COURSE DETAIL <i className="fas fa-arrow-right"></i></a>
                                                                </div>
                                                                <div className="blakish-overlay"></div>
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

                                                    <div className="col-md-4">
                                                        <div className="best-course-pic-text relative-position">
                                                            <div className="best-course-pic relative-position">
                                                                <img src={require("../../assets/img/course/bc-6.jpg")} alt="" />
                                                                <div className="trend-badge-2 text-center text-uppercase">
                                                                    <i className="fas fa-bolt"></i>
                                                                    <span>Trending</span>
                                                                </div>
                                                                <div className="course-price text-center gradient-bg">
                                                                    <span>$99.00</span>
                                                                </div>
                                                                <div className="course-rate ul-li">
                                                                    <ul>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="course-details-btn">
                                                                    <a href="#">COURSE DETAIL <i className="fas fa-arrow-right"></i></a>
                                                                </div>
                                                                <div className="blakish-overlay"></div>
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

                                                    <div className="col-md-4">
                                                        <div className="best-course-pic-text relative-position">
                                                            <div className="best-course-pic relative-position">
                                                                <img src={require("../../assets/img/course/bc-7.jpg")} alt="" />
                                                                <div className="course-price text-center gradient-bg">
                                                                    <span>$99.00</span>
                                                                </div>
                                                                <div className="course-rate ul-li">
                                                                    <ul>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="course-details-btn">
                                                                    <a href="#">COURSE DETAIL <i className="fas fa-arrow-right"></i></a>
                                                                </div>
                                                                <div className="blakish-overlay"></div>
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

                                                    <div className="col-md-4">
                                                        <div className="best-course-pic-text relative-position">
                                                            <div className="best-course-pic relative-position">
                                                                <img src={require("../../assets/img/course/bc-8.jpg")} alt="" />
                                                                <div className="course-price text-center gradient-bg">
                                                                    <span>$99.00</span>
                                                                </div>
                                                                <div className="course-rate ul-li">
                                                                    <ul>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="course-details-btn">
                                                                    <a href="#">COURSE DETAIL <i className="fas fa-arrow-right"></i></a>
                                                                </div>
                                                                <div className="blakish-overlay"></div>
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

                                                    <div className="col-md-4">
                                                        <div className="best-course-pic-text relative-position">
                                                            <div className="best-course-pic relative-position">
                                                                <img src={require("../../assets/img/course/bc-4.jpg")} alt="" />
                                                                <div className="course-price text-center gradient-bg">
                                                                    <span>$99.00</span>
                                                                </div>
                                                                <div className="course-rate ul-li">
                                                                    <ul>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                        <li><i className="fas fa-star"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="course-details-btn">
                                                                    <a href="#">COURSE DETAIL <i className="fas fa-arrow-right"></i></a>
                                                                </div>
                                                                <div className="blakish-overlay"></div>
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
                                        </div>

                                        <div id="tab2" className="tab-content-1">
                                            <div className="course-list-view">
                                                <table>
                                                    <tr className="list-head">
                                                        <th>COURSE NAME</th>
                                                        <th>COURSE TYPE</th>
                                                        <th>STARTS</th>
                                                        <th>LENGTH</th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="course-list-img-text">
                                                                <div className="course-list-img">
                                                                    <img src={require("../../assets/img/course/cl-1.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-list-text">
                                                                    <h3><a href="#">Fully Responsive Web Design & Development.</a></h3>
                                                                    <div className="course-meta">
                                                                        <span className="course-category bold-font"><a href="#">$120.25</a></span>
                                                                        <div className="course-rate ul-li">
                                                                            <ul>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="course-type-list">
                                                                <span>Graphic Design & 3D</span>
                                                            </div>
                                                        </td>
                                                        <td>6-06-2018</td>
                                                        <td>3 Months</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="course-list-img-text">
                                                                <div className="course-list-img">
                                                                    <img src={require("../../assets/img/course/cl-2.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-list-text">
                                                                    <h3><a href="#">Fully Responsive Web Design & Development.</a></h3>
                                                                    <div className="course-meta">
                                                                        <span className="course-category bold-font"><a href="#">$120.25</a></span>
                                                                        <div className="course-rate ul-li">
                                                                            <ul>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="course-type-list">
                                                                <span>Graphic Design & 3D</span>
                                                            </div>
                                                        </td>
                                                        <td>6-06-2018</td>
                                                        <td>3 Months</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="course-list-img-text">
                                                                <div className="course-list-img">
                                                                    <img src={require("../../assets/img/course/cl-3.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-list-text">
                                                                    <h3><a href="#">Fully Responsive Web Design & Development.</a></h3>
                                                                    <div className="course-meta">
                                                                        <span className="course-category bold-font"><a href="#">$120.25</a></span>
                                                                        <div className="course-rate ul-li">
                                                                            <ul>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="course-type-list">
                                                                <span>Graphic Design & 3D</span>
                                                            </div>
                                                        </td>
                                                        <td>6-06-2018</td>
                                                        <td>3 Months</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="course-list-img-text">
                                                                <div className="course-list-img">
                                                                    <img src={require("../../assets/img/course/cl-4.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-list-text">
                                                                    <h3><a href="#">Fully Responsive Web Design & Development.</a></h3>
                                                                    <div className="course-meta">
                                                                        <span className="course-category bold-font"><a href="#">$120.25</a></span>
                                                                        <div className="course-rate ul-li">
                                                                            <ul>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="course-type-list">
                                                                <span>Graphic Design & 3D</span>
                                                            </div>
                                                        </td>
                                                        <td>6-06-2018</td>
                                                        <td>3 Months</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="course-list-img-text">
                                                                <div className="course-list-img">
                                                                    <img src={require("../../assets/img/course/cl-5.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-list-text">
                                                                    <h3><a href="#">Fully Responsive Web Design & Development.</a></h3>
                                                                    <div className="course-meta">
                                                                        <span className="course-category bold-font"><a href="#">$120.25</a></span>
                                                                        <div className="course-rate ul-li">
                                                                            <ul>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="course-type-list">
                                                                <span>Graphic Design & 3D</span>
                                                            </div>
                                                        </td>
                                                        <td>6-06-2018</td>
                                                        <td>3 Months</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="course-list-img-text">
                                                                <div className="course-list-img">
                                                                    <img src={require("../../assets/img/course/cl-1.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-list-text">
                                                                    <h3><a href="#">Fully Responsive Web Design & Development.</a></h3>
                                                                    <div className="course-meta">
                                                                        <span className="course-category bold-font"><a href="#">$120.25</a></span>
                                                                        <div className="course-rate ul-li">
                                                                            <ul>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="course-type-list">
                                                                <span>Graphic Design & 3D</span>
                                                            </div>
                                                        </td>
                                                        <td>6-06-2018</td>
                                                        <td>3 Months</td>
                                                    </tr>
                                                </table>
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

                            <div className="col-md-3">
                                <CourseSidebar />
                            </div>
                        </div>
                    </div>
                </section>
                <RecentlyView />
                <Footer />
            </div>
        );
    }
}

export default Course;