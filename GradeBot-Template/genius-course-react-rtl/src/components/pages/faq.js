import React, { Component } from 'react';
import Header from '../layouts/header';
import Breadcrumb from '../layouts/breadcrumb';
import BestProduct from '../layouts/best_product';
import Footer from '../layouts/footer';

import FeaturedCourse from '../layouts/widgets/featured_course'
import RelatedNews from '../layouts/widgets/related_news'


class FAQ extends Component {

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
                <section id="faq-page" className="faq-page-section">
                    <div className="container">
                        <div className="faq-element">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="faq-page-tab">
                                        <div className="section-title-2 mb65 headline text-left">
                                            <h2>Find <span>Your Questions &amp; Answers.</span></h2>
                                        </div>
                                        <div className="faq-tab faq-secound-home-version mb35">
                                            <div className="faq-tab-ques  ul-li">
                                                <div className="tab-button text-left mb45">
                                                    <ul className="product-tab">
                                                        <li className="active" rel="tab1">GENERAL </li>
                                                        <li rel="tab2"> COURSES </li>
                                                        <li rel="tab3"> TEACHERS </li>
                                                        <li rel="tab4">  EVENTS</li>
                                                        <li rel="tab5">  OTHERS</li>
                                                    </ul>
                                                </div>
                                                <div className="tab-container">
                                                    <div id="tab1" className="tab-content-1 pt35">
                                                        <div id="accordion" className="panel-group">
                                                            <div className="row ml-0 mr-0">
                                                                <div className="col-md-6">
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="headingOne">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                                    How to Register or Make An Account in Genius?
                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="headingTwo">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                                                    What is Genius Courses?
                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="headingThree">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                                                    What Lorem Ipsum Dolor Sit Amet Consectuerer?
                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="heading65">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link  collapsed" data-toggle="collapse" data-target="#collapse65" aria-expanded="true" aria-controls="collapse65">
                                                                                    How to Register or Make An Account in Genius?
                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapse65" className="collapse" aria-labelledby="heading65" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="heading78">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link  collapsed" data-toggle="collapse" data-target="#collapse78" aria-expanded="true" aria-controls="collapse78">
                                                                                    How to Register or Make An Account in Genius?
                                                                                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapse78" className="collapse" aria-labelledby="heading78" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="heading22">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapse22" aria-expanded="true" aria-controls="collapse22">
                                                                                    How to Register or Make An Account in Genius?
                                                                                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapse22" className="collapse show" aria-labelledby="heading22" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="headingFoure">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFoure" aria-expanded="true" aria-controls="collapseFoure">
                                                                                    Adipiscing Diamet Nonnumy Nibh Euismod?
                                                                                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapseFoure" className="collapse" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="heading33">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse33" aria-expanded="true" aria-controls="collapse33">
                                                                                    What is Genius Courses?
                                                                                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapse33" className="collapse" aria-labelledby="heading33" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="heading36">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link  collapsed" data-toggle="collapse" data-target="#collapse36" aria-expanded="true" aria-controls="collapse36">
                                                                                    How to Register or Make An Account in Genius?
                                                                                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapse36" className="collapse" aria-labelledby="heading36" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="heading998">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link  collapsed" data-toggle="collapse" data-target="#collapse998" aria-expanded="true" aria-controls="collapse998">
                                                                                    How to Register or Make An Account in Genius?
                                                                                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapse998" className="collapse" aria-labelledby="heading998" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="tab2" className="tab-content-1 pt35">
                                                        <div id="accordion-2" className="panel-group">
                                                            <div className="row ml-0 mr-0">
                                                                <div className="col-md-6">
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="headingOne">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                                    How to Register or Make An Account in Genius?
                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="headingTwo">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                                                    What is Genius Courses?
                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="headingThree">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                                                    What Lorem Ipsum Dolor Sit Amet Consectuerer?
                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="heading65">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link  collapsed" data-toggle="collapse" data-target="#collapse65" aria-expanded="true" aria-controls="collapse65">
                                                                                    How to Register or Make An Account in Genius?
                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapse65" className="collapse" aria-labelledby="heading65" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="heading78">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link  collapsed" data-toggle="collapse" data-target="#collapse78" aria-expanded="true" aria-controls="collapse78">
                                                                                    How to Register or Make An Account in Genius?
                                                                                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapse78" className="collapse" aria-labelledby="heading78" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="heading22">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapse22" aria-expanded="true" aria-controls="collapse22">
                                                                                    How to Register or Make An Account in Genius?
                                                                                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapse22" className="collapse show" aria-labelledby="heading22" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="headingFoure">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFoure" aria-expanded="true" aria-controls="collapseFoure">
                                                                                    Adipiscing Diamet Nonnumy Nibh Euismod?
                                                                                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapseFoure" className="collapse" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="heading33">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse33" aria-expanded="true" aria-controls="collapse33">
                                                                                    What is Genius Courses?
                                                                                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapse33" className="collapse" aria-labelledby="heading33" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="heading36">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link  collapsed" data-toggle="collapse" data-target="#collapse36" aria-expanded="true" aria-controls="collapse36">
                                                                                    How to Register or Make An Account in Genius?
                                                                                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapse36" className="collapse" aria-labelledby="heading36" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel">
                                                                        <div className="panel-title" id="heading998">
                                                                            <h3 className="mb-0">
                                                                                <button className="btn btn-link  collapsed" data-toggle="collapse" data-target="#collapse998" aria-expanded="true" aria-controls="collapse998">
                                                                                    How to Register or Make An Account in Genius?
                                                                                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                        <div id="collapse998" className="collapse" aria-labelledby="heading998" data-parent="#accordion">
                                                                            <div className="panel-body">
                                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
                                                                                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                    </div>
                                                    <div id="tab3" className="tab-content-1 pt35">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="ques-ans mb45 headline">
                                                                    <h3> What is Genius Courses?</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                                                                </div>
                                                                <div className="ques-ans mb45 headline">
                                                                    <h3> What Lorem Ipsum Dolor Sit Amet Consectuerer?</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="ques-ans mb45 headline">
                                                                    <h3> How to Register or Make An Account in Genius?</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                                                                </div>
                                                                <div className="ques-ans mb45 headline">
                                                                    <h3> Adipiscing Diamet Nonnumy Nibh Euismod?</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="tab4" className="tab-content-1 pt35">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="ques-ans mb45 headline">
                                                                    <h3> What is Genius Courses?</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                                                                </div>
                                                                <div className="ques-ans mb45 headline">
                                                                    <h3> What Lorem Ipsum Dolor Sit Amet Consectuerer?</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="ques-ans mb45 headline">
                                                                    <h3> How to Register or Make An Account in Genius?</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                                                                </div>
                                                                <div className="ques-ans mb45 headline">
                                                                    <h3> Adipiscing Diamet Nonnumy Nibh Euismod?</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="tab5" className="tab-content-1 pt35">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="ques-ans mb45 headline">
                                                                    <h3> What is Genius Courses?</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                                                                </div>
                                                                <div className="ques-ans mb45 headline">
                                                                    <h3> What Lorem Ipsum Dolor Sit Amet Consectuerer?</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="ques-ans mb45 headline">
                                                                    <h3> How to Register or Make An Account in Genius?</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                                                                </div>
                                                                <div className="ques-ans mb45 headline">
                                                                    <h3> Adipiscing Diamet Nonnumy Nibh Euismod?</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-btn">
                                        <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                                            <a href="#">Make Question <i className="fas fa-caret-right" /></a>
                                        </div>
                                        <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                                            <a href="#">contact us <i className="fas fa-caret-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="col-md-3">
                                    <RelatedNews />
                                    <FeaturedCourse />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <BestProduct />
                <Footer />
            </div>
        );
    }
}

export default FAQ;