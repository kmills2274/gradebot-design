import React, { Component } from 'react';

import Header from '../layouts/header';
import Breadcrumb from '../layouts/breadcrumb';
import BlogSidebar from '../layouts/blog_sidebar';
import Footer from '../layouts/footer';

class Blog extends Component {

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
                <Breadcrumb BreadcumbTitle="Genius" BreadcumbBigTitle="Blog" BreadcumbLinkText="Blog" />

                <section id="blog-item" className="blog-item-post">
                    <div className="container">
                        <div className="blog-content-details">
                            <div className="row">
                            <div className="col-md-9">
                                <div className="blog-post-content">
                                    <div className="short-filter-tab">
                                        <div className="shorting-filter  float-left">
                                            <span><b>Sort</b> By</span>
                                            <select>
                                                <option value="9" selected="">Popularity</option>
                                                <option value="10">Most Read</option>
                                                <option value="11">Most View</option>
                                                <option value="12">Most Shared</option>
                                            </select>
                                        </div>
                                        <div className="tab-button blog-button ul-li text-center float-right">
                                            <ul className="product-tab">
                                                <li className="active" rel="tab1"><i className="fas fa-th"></i></li>
                                                <li rel="tab2"> <i className="fas fa-list"></i></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="genius-post-item">
                                        <div className="tab-container">
                                            <div id="tab1" className="tab-content-1 pt35">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="blog-post-img-content">
                                                            <div className="blog-img-date relative-position">
                                                                <div className="blog-thumnile">
                                                                    <img src={require("../../assets/img/blog/bp-1.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-price text-center gradient-bg">
                                                                    <span>26 April 2018</span>
                                                                </div>
                                                            </div>
                                                            <div className="blog-title-content headline">
                                                                <h3><a href="#">Affiliate Marketing A Beginner’s Guide.</a></h3>
                                                                <div className="blog-content">
                                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
															</div>

                                                                <div className="view-all-btn bold-font">
                                                                    <a href="#">Read More <i className="fas fa-chevron-circle-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="blog-post-img-content">
                                                            <div className="blog-img-date relative-position">
                                                                <div className="blog-thumnile">
                                                                    <img src={require("../../assets/img/blog/bp-2.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-price text-center gradient-bg">
                                                                    <span>26 April 2018</span>
                                                                </div>
                                                            </div>
                                                            <div className="blog-title-content headline">
                                                                <h3><a href="#">Affiliate Marketing A Beginner’s Guide.</a></h3>
                                                                <div className="blog-content">
                                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
															</div>

                                                                <div className="view-all-btn bold-font">
                                                                    <a href="#">Read More <i className="fas fa-chevron-circle-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="blog-post-img-content">
                                                            <div className="blog-img-date relative-position">
                                                                <div className="blog-thumnile">
                                                                    <img src={require("../../assets/img/blog/bp-3.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-price text-center gradient-bg">
                                                                    <span>26 April 2018</span>
                                                                </div>
                                                            </div>
                                                            <div className="blog-title-content headline">
                                                                <h3><a href="#">Affiliate Marketing A Beginner’s Guide.</a></h3>
                                                                <div className="blog-content">
                                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
															</div>

                                                                <div className="view-all-btn bold-font">
                                                                    <a href="#">Read More <i className="fas fa-chevron-circle-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="blog-post-img-content">
                                                            <div className="blog-img-date relative-position">
                                                                <div className="blog-thumnile">
                                                                    <img src={require("../../assets/img/blog/bp-4.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-price text-center gradient-bg">
                                                                    <span>26 April 2018</span>
                                                                </div>
                                                            </div>
                                                            <div className="blog-title-content headline">
                                                                <h3><a href="#">Affiliate Marketing A Beginner’s Guide.</a></h3>
                                                                <div className="blog-content">
                                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
															</div>

                                                                <div className="view-all-btn bold-font">
                                                                    <a href="#">Read More <i className="fas fa-chevron-circle-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="blog-post-img-content">
                                                            <div className="blog-img-date relative-position">
                                                                <div className="blog-thumnile">
                                                                    <img src={require("../../assets/img/blog/bp-5.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-price text-center gradient-bg">
                                                                    <span>26 April 2018</span>
                                                                </div>
                                                            </div>
                                                            <div className="blog-title-content headline">
                                                                <h3><a href="#">Affiliate Marketing A Beginner’s Guide.</a></h3>
                                                                <div className="blog-content">
                                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
															</div>

                                                                <div className="view-all-btn bold-font">
                                                                    <a href="#">Read More <i className="fas fa-chevron-circle-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="blog-post-img-content">
                                                            <div className="blog-img-date relative-position">
                                                                <div className="blog-thumnile">
                                                                    <img src={require("../../assets/img/blog/bp-1.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-price text-center gradient-bg">
                                                                    <span>26 April 2018</span>
                                                                </div>
                                                            </div>
                                                            <div className="blog-title-content headline">
                                                                <h3><a href="#">Affiliate Marketing A Beginner’s Guide.</a></h3>
                                                                <div className="blog-content">
                                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
															</div>

                                                                <div className="view-all-btn bold-font">
                                                                    <a href="#">Read More <i className="fas fa-chevron-circle-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="tab2" className="tab-content-1 pt35">
                                                <div className="blog-list-view">
                                                    <div className="list-blog-item">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="blog-post-img-content">
                                                                    <div className="blog-img-date relative-position">
                                                                        <div className="blog-thumnile">
                                                                            <img src={require("../../assets/img/blog/bp-1.jpg")} alt="" />
                                                                        </div>
                                                                        <div className="course-price text-center gradient-bg">
                                                                            <span>26 April 2018</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="blog-title-content headline">
                                                                    <h3><a href="#">Affiliate Marketing A Beginner’s Guide.</a></h3>
                                                                    <div className="blog-content">
                                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
																</div>

                                                                    <div className="view-all-btn bold-font">
                                                                        <a href="#">Read More <i className="fas fa-chevron-circle-right"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="list-blog-item">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="blog-post-img-content">
                                                                    <div className="blog-img-date relative-position">
                                                                        <div className="blog-thumnile">
                                                                            <img src={require("../../assets/img/blog/bp-5.jpg")} alt="" />
                                                                        </div>
                                                                        <div className="course-price text-center gradient-bg">
                                                                            <span>26 April 2018</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="blog-title-content headline">
                                                                    <h3><a href="#">Affiliate Marketing A Beginner’s Guide.</a></h3>
                                                                    <div className="blog-content">
                                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
																</div>

                                                                    <div className="view-all-btn bold-font">
                                                                        <a href="#">Read More <i className="fas fa-chevron-circle-right"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="list-blog-item">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="blog-post-img-content">
                                                                    <div className="blog-img-date relative-position">
                                                                        <div className="blog-thumnile">
                                                                            <img src={require("../../assets/img/blog/bp-4.jpg")} alt="" />
                                                                        </div>
                                                                        <div className="course-price text-center gradient-bg">
                                                                            <span>26 April 2018</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="blog-title-content headline">
                                                                    <h3><a href="#">Affiliate Marketing A Beginner’s Guide.</a></h3>
                                                                    <div className="blog-content">
                                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
																</div>

                                                                    <div className="view-all-btn bold-font">
                                                                        <a href="#">Read More <i className="fas fa-chevron-circle-right"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="list-blog-item">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="blog-post-img-content">
                                                                    <div className="blog-img-date relative-position">
                                                                        <div className="blog-thumnile">
                                                                            <img src={require("../../assets/img/blog/bp-1.jpg")} alt="" />
                                                                        </div>
                                                                        <div className="course-price text-center gradient-bg">
                                                                            <span>26 April 2018</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="blog-title-content headline">
                                                                    <h3><a href="#">Affiliate Marketing A Beginner’s Guide.</a></h3>
                                                                    <div className="blog-content">
                                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
																</div>

                                                                    <div className="view-all-btn bold-font">
                                                                        <a href="#">Read More <i className="fas fa-chevron-circle-right"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="list-blog-item">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="blog-post-img-content">
                                                                    <div className="blog-img-date relative-position">
                                                                        <div className="blog-thumnile">
                                                                            <img src={require("../../assets/img/blog/bp-2.jpg")} alt="" />
                                                                        </div>
                                                                        <div className="course-price text-center gradient-bg">
                                                                            <span>26 April 2018</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="blog-title-content headline">
                                                                    <h3><a href="#">Affiliate Marketing A Beginner’s Guide.</a></h3>
                                                                    <div className="blog-content">
                                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
																</div>

                                                                    <div className="view-all-btn bold-font">
                                                                        <a href="#">Read More <i className="fas fa-chevron-circle-right"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="list-blog-item">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="blog-post-img-content">
                                                                    <div className="blog-img-date relative-position">
                                                                        <div className="blog-thumnile">
                                                                            <img src={require("../../assets/img/blog/bp-3.jpg")} alt="" />
                                                                        </div>
                                                                        <div className="course-price text-center gradient-bg">
                                                                            <span>26 April 2018</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="blog-title-content headline">
                                                                    <h3><a href="#">Affiliate Marketing A Beginner’s Guide.</a></h3>
                                                                    <div className="blog-content">
                                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
																</div>

                                                                    <div className="view-all-btn bold-font">
                                                                        <a href="#">Read More <i className="fas fa-chevron-circle-right"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
                                <BlogSidebar />
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Blog;