import React, { Component } from 'react';

import Header from '../layouts/header';
import Breadcrumb from '../layouts/breadcrumb';
import AboutSidebar from '../layouts/about_sidebar';
import BestProduct from '../layouts/best_product';
import Footer from '../layouts/footer';

class TeacherDetail extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumb BreadcumbTitle="Genius" BreadcumbBigTitle="Teacher" BreadcumbLinkText="Teacher" />

                <section id="teacher-page" className="teacher-page-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="teacher-details-content mb45">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="teacher-details-img">
                                                <img src={require("../../assets/img/teacher/td-1.jpg")} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="teacher-details-text">
                                                <div className="section-title-2  headline text-left">
                                                    <h2>Michele <span>Lusiana Fernandes.</span></h2>
                                                    <div className="teacher-deg">
                                                        Specialities: <span>Mobile Apps.</span>
                                                    </div>
                                                </div>
                                                <div className="teacher-desc-social ul-li">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <div className="info-social">
                                                                    <i className="fab fa-facebook-f"></i>
                                                                </div>
                                                                <span className="info-text">Facebook</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <div className="info-social">
                                                                    <i className="fab fa-twitter"></i>
                                                                </div>
                                                                <span className="info-text">Twitter</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <div className="info-social">
                                                                    <i className="fab fa-behance"></i>
                                                                </div>
                                                                <span className="info-text">Behance</span>

                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <div className="info-social">
                                                                    <i className="fab fa-google-plus-g"></i>
                                                                </div>
                                                                <span className="info-text">Google + </span>

                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="teacher-address">
                                                    <div className="address-details ul-li-block">
                                                        <ul>
                                                            <li>
                                                                <div className="addrs-icon">
                                                                    <i className="fas fa-map-marker-alt"></i>
                                                                </div>
                                                                <div className="add-info">
                                                                    <span><b>Address: </b>210, Firs Avenue, Texas Hill, US</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="addrs-icon">
                                                                    <i className="fas fa-phone"></i>
                                                                </div>
                                                                <div className="add-info">
                                                                    <span><b>Telp: </b>100 9889-2000</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="addrs-icon">
                                                                    <i className="fas fa-envelope"></i>
                                                                </div>
                                                                <div className="add-info">
                                                                    <span><b>E-mail: </b>genius@lusianafernandes.com</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="about-teacher mb45">
                                    <div className="section-title-2  headline text-left">
                                        <h2>About <span>Teacher.</span></h2>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
							</p>
                                </div>

                                <div className="about-teacher mb45 teacher-specialist">
                                    <div className="section-title-2  headline text-left">
                                        <h2>Teacher <span>Specialities.</span></h2>
                                    </div>

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

                                <div className="about-teacher about-faq faq-secound-home-version">
                                    <div className="section-title-2  headline text-left">
                                        <h2>Frequently  <span>Ask & Questions.</span></h2>
                                    </div>

                                    <div className="faq-tab mb35">
                                        <div className="faq-tab-ques  ul-li">
                                            <div className="tab-button  mb30">
                                                <ul className="product-tab">
                                                    <li className="active" rel="tab1">GENERAL </li>
                                                    <li rel="tab2"> COURSES </li>
                                                    <li rel="tab3"> TEACHERS </li>
                                                    <li rel="tab4">  EVENTS  </li>
                                                    <li rel="tab5">  OTHERS  </li>
                                                </ul>
                                            </div>

                                            <div className="tab-container">
                                                <div id="tab1" className="tab-content-1 pt35">
                                                    <div id="accordion3" className="panel-group">
                                                        <div className="panel">
                                                            <div className="panel-title" id="headingOne">
                                                                <h3 className="mb-0">
                                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                        How to Register or Make An Account in Genius?
															</button>
                                                                </h3>
                                                            </div>
                                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion3">
                                                                <div className="panel-body">
                                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
														</div>
                                                            </div>
                                                        </div>
                                                        <div className="panel">
                                                            <div className="panel-title" id="headingTwo">
                                                                <h3 className="mb-0">
                                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                        What is Genius Courses?
															</button>
                                                                </h3>
                                                            </div>
                                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion3">
                                                                <div className="panel-body">
                                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
														</div>
                                                            </div>
                                                        </div>
                                                        <div className="panel">
                                                            <div className="panel-title" id="headingThree">
                                                                <h3 className="mb-0">
                                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                        What Lorem Ipsum Dolor Sit Amet Consectuerer?
															</button>
                                                                </h3>
                                                            </div>
                                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion3">
                                                                <div className="panel-body">
                                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
														</div>
                                                            </div>
                                                        </div>
                                                        <div className="panel">
                                                            <div className="panel-title" id="headingFoure">
                                                                <h3 className="mb-0">
                                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFoure" aria-expanded="false" aria-controls="collapseFoure">
                                                                        Adipiscing Diamet Nonnumy Nibh Euismod?
															</button>
                                                                </h3>
                                                            </div>
                                                            <div id="collapseFoure" className="collapse" data-parent="#accordion3">
                                                                <div className="panel-body">
                                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
														</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div id="tab2" className="tab-content-1 pt35">
                                                    <div id="accordion" className="panel-group">
                                                        <div className="panel">
                                                            <div className="panel-title" id="headingSix">
                                                                <h3 className="mb-0">
                                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                                                        How to Register or Make An Account in Genius?
															</button>
                                                                </h3>
                                                            </div>
                                                            <div id="collapseSix" className="collapse show" aria-labelledby="headingSix" data-parent="#accordion">
                                                                <div className="panel-body">
                                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
														</div>
                                                            </div>
                                                        </div>
                                                        <div className="panel">
                                                            <div className="panel-title" id="headingSeven">
                                                                <h3 className="mb-0">
                                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                                        What is Genius Courses?
															</button>
                                                                </h3>
                                                            </div>
                                                            <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                                                                <div className="panel-body">
                                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
														</div>
                                                            </div>
                                                        </div>
                                                        <div className="panel">
                                                            <div className="panel-title" id="headingEight">
                                                                <h3 className="mb-0">
                                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                                        What Lorem Ipsum Dolor Sit Amet Consectuerer?
															</button>
                                                                </h3>
                                                            </div>
                                                            <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                                                                <div className="panel-body">
                                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
														</div>
                                                            </div>
                                                        </div>
                                                        <div className="panel">
                                                            <div className="panel-title" id="headingNine">
                                                                <h3 className="mb-0">
                                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                                        Adipiscing Diamet Nonnumy Nibh Euismod?
															</button>
                                                                </h3>
                                                            </div>
                                                            <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordion">
                                                                <div className="panel-body">
                                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
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

                                    <div className="about-btn">
                                        <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                                            <a href="#">Make Question <i className="fas fa-caret-right"></i></a>
                                        </div>
                                        <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                                            <a href="#">contact us <i className="fas fa-caret-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="about-teacher teacher-contact">
                                    <div className="section-title-2  headline text-left">
                                        <h2>Have a Question? Send a <span>Message.</span></h2>
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

export default TeacherDetail;