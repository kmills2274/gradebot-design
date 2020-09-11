import React, { Component } from 'react';

import Header from '../layouts/header';
import Breadcrumb from '../layouts/breadcrumb';
import CourseSidebar from '../layouts/course_sidebar_single';
import Footer from '../layouts/footer';

class CourseDetails extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumb BreadcumbTitle="Genius" BreadcumbBigTitle="Course" BreadcumbLinkText="Course" />

                <section id="course-details" className="course-details-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="course-details-item">
                                    <div className="course-single-pic mb30">
                                        <img src={require("../../assets/img/course/cs-1.jpg")} alt="" />
                                    </div>
                                    <div className="course-single-text">
                                        <div className="course-title mt10 headline relative-position">
                                            <h3><a href="#">Fully Responsive <b>Web Design &amp; Development.</b></a> <span className="trend-badge text-uppercase bold-font"><i className="fas fa-bolt"></i> TRENDING</span></h3>
                                        </div>
                                        <div className="course-details-content">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
									</p>
                                        </div>

                                        <div className="course-details-category ul-li">
                                            <span>Course <b>Section:</b></span>
                                            <ul>
                                                <li><a href="#">SEction 1 </a></li>
                                                <li><a href="#">SEction 2 </a></li>
                                                <li><a href="#">SEction 3 </a></li>
                                                <li><a href="#">SEction 4  </a></li>
                                                <li><a href="#">SEction 5  </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div className="affiliate-market-guide mb65">
                                    <div className="section-title-2 mb20 headline text-left">
                                        <h2><span>Affiliate Marketing</span> A Begginer's Guide</h2>
                                    </div>

                                    <div className="affiliate-market-accordion">
                                        <div id="accordion" className="panel-group">
                                            <div className="panel">
                                                <div className="panel-title" id="headingOne">
                                                    <div className="ac-head">

                                                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <span>01</span>	Designing Website Using Photoshop
												</button>
                                                        <div className="course-by">
                                                            BY: <b>TONI KROSS</b>
                                                        </div>
                                                        <div className="leanth-course">
                                                            <span>60 Minuttes</span>
                                                            <span>Adobe photoshop</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div className="panel-body">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.
											</div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <div className="panel-title" id="headingTwo">
                                                    <div className="ac-head">

                                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                            <span>02</span>	Designing Website Using Photoshop
												</button>
                                                        <div className="course-by">
                                                            BY: <b>TONI KROSS</b>
                                                        </div>
                                                        <div className="leanth-course">
                                                            <span>60 Minuttes</span>
                                                            <span>Adobe photoshop</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div className="panel-body">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
											</div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <div className="panel-title" id="headingThree">
                                                    <div className="ac-head">
                                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                            <span>03</span>	Designing Website Using Photoshop
												</button>
                                                        <div className="course-by">
                                                            BY: <b>TONI KROSS</b>
                                                        </div>
                                                        <div className="leanth-course">
                                                            <span>60 Minuttes</span>
                                                            <span>Adobe photoshop</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div className="panel-body">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
											</div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <div className="panel-title" id="headingFoure">
                                                    <div className="ac-head">
                                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFoure" aria-expanded="true" aria-controls="collapseFoure">
                                                            <span>04</span>	Designing Website Using Photoshop
												</button>
                                                        <div className="course-by">
                                                            BY: <b>TONI KROSS</b>
                                                        </div>
                                                        <div className="leanth-course">
                                                            <span>60 Minuttes</span>
                                                            <span>Adobe photoshop</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="collapseFoure" className="collapse" data-parent="#accordion">
                                                    <div className="panel-body">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
											</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-review">
                                    <div className="section-title-2 mb20 headline text-left">
                                        <h2>Course <span>Reviews:</span></h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="ratting-preview">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="avrg-rating ul-li">
                                                            <b>Average Rating</b>
                                                            <span className="avrg-rate">5.0</span>
                                                            <ul>
                                                                <li><i className="fas fa-star"></i></li>
                                                                <li><i className="fas fa-star"></i></li>
                                                                <li><i className="fas fa-star"></i></li>
                                                                <li><i className="fas fa-star"></i></li>
                                                                <li><i className="fas fa-star"></i></li>
                                                            </ul>
                                                            <b>1.225 Ratings</b>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="avrg-rating ul-li">
                                                            <span>Details</span>
                                                            <div className="rating-overview">
                                                                <span className="start-item">5 Starts</span>
                                                                <span className="start-bar"></span>
                                                                <span className="start-count">1.225</span>
                                                            </div>
                                                            <div className="rating-overview">
                                                                <span className="start-item">4 Starts</span>
                                                                <span className="start-bar"></span>
                                                                <span className="start-count">0</span>
                                                            </div>
                                                            <div className="rating-overview">
                                                                <span className="start-item">3 Starts</span>
                                                                <span className="start-bar"></span>
                                                                <span className="start-count">0</span>
                                                            </div>
                                                            <div className="rating-overview">
                                                                <span className="start-item">2 Starts</span>
                                                                <span className="start-bar"></span>
                                                                <span className="start-count">0</span>
                                                            </div>
                                                            <div className="rating-overview">
                                                                <span className="start-item">1 Starts</span>
                                                                <span className="start-bar"></span>
                                                                <span className="start-count">0</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="couse-comment">
                                    <div className="blog-comment-area ul-li about-teacher-2">
                                        <ul className="comment-list">
                                            <li>
                                                <div className=" comment-avater">
                                                    <img src={require("../../assets/img/blog/ath-2.jpg")} alt="" />
                                                </div>

                                                <div className="author-name-rate">
                                                    <div className="author-name float-left">
                                                        BY: <span>FRANK LAMPARD</span>
                                                    </div>
                                                    <div className="comment-ratting float-right ul-li">
                                                        <ul>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div className="time-comment float-right">3 Days ago</div>
                                                </div>
                                                <div className="author-designation-comment">
                                                    <h3>Great Course!! Recommended for Everyone</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
											</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className=" comment-avater">
                                                    <img src={require("../../assets/img/blog/ath.jpg")} alt="" />
                                                </div>

                                                <div className="author-name-rate">
                                                    <div className="author-name float-left">
                                                        BY: <span>FRANK LAMPARD</span>
                                                    </div>
                                                    <div className="comment-ratting float-right ul-li">
                                                        <ul>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div className="time-comment float-right">3 Days ago</div>
                                                </div>
                                                <div className="author-designation-comment">
                                                    <h3>Great Course!! Recommended for Everyone</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
											</p>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="reply-comment-box">
                                            <div className="review-option">
                                                <div className="section-title-2  headline text-left float-left">
                                                    <h2>Add  <span>Reviews.</span></h2>
                                                </div>
                                                <div className="review-stars-item float-right mt15">
                                                    <span>Your Rating: </span>
                                                    <form className="rating">
                                                        <label>
                                                            <input type="radio" name="stars" value="1" />
                                                            <span className="icon"><i className="fas fa-star"></i></span>
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="stars" value="2" />
                                                            <span className="icon"><i className="fas fa-star"></i></span>
                                                            <span className="icon"><i className="fas fa-star"></i></span>
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="stars" value="3" />
                                                            <span className="icon"><i className="fas fa-star"></i></span>
                                                            <span className="icon"><i className="fas fa-star"></i></span>
                                                            <span className="icon"><i className="fas fa-star"></i></span>
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="stars" value="4" />
                                                            <span className="icon"><i className="fas fa-star"></i></span>
                                                            <span className="icon"><i className="fas fa-star"></i></span>
                                                            <span className="icon"><i className="fas fa-star"></i></span>
                                                            <span className="icon"><i className="fas fa-star"></i></span>
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="stars" value="5" />
                                                            <span className="icon"><i className="fas fa-star"></i></span>
                                                            <span className="icon"><i className="fas fa-star"></i></span>
                                                            <span className="icon"><i className="fas fa-star"></i></span>
                                                            <span className="icon"><i className="fas fa-star"></i></span>
                                                            <span className="icon"><i className="fas fa-star"></i></span>
                                                        </label>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="teacher-faq-form">
                                                <form method="POST" action="/no-form" data-lead="Residential">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label for="name">Your Name</label>
                                                            <input type="text" name="name" id="name" required="required" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label for="phone">Email Address</label>
                                                            <input type="tel" name="phone" id="phone" required="required" />
                                                        </div>
                                                    </div>
                                                    <label for="comments">Message</label>
                                                    <textarea name="comments" id="comments" rows="2" cols="20" required="required"></textarea>
                                                    <div className="nws-button text-center  gradient-bg text-uppercase">
                                                        <button type="submit" value="Submit">Send Message now</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <CourseSidebar />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default CourseDetails;