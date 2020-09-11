import React, { Component } from 'react';

import Header from '../layouts/header';
import Breadcrumb from '../layouts/breadcrumb';
import BlogSidebar from '../layouts/blog_sidebar';
import Footer from '../layouts/footer';

class BlogSingle extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumb BreadcumbTitle="Genius" BreadcumbBigTitle="Blog" BreadcumbLinkText="Blog" />

                <section id="blog-detail" className="blog-details-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="blog-details-content">
                                    <div className="post-content-details">
                                        <div className="blog-detail-thumbnile mb35">
                                            <img src={require("../../assets/img/blog/bd-1.jpg")} alt="" />
                                        </div>
                                        <h2>Affiliate Marketing A Beginner’s Guide.</h2>

                                        <div className="date-meta text-uppercase">
                                            <span><i className="fas fa-calendar-alt"></i> 26 April 2018</span>
                                            <span><i className="fas fa-user"></i> PRO.THEO HENRY</span>
                                            <span><i className="fas fa-comment-dots"></i> 15 COMMENTS</span>
                                        </div>
                                        <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit </h3>
                                        <p>Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>

                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                                    </div>
                                    <div className="blog-share-tag">
                                        <div className="share-text float-left">
                                            Share this news
                                        </div>
                                        <div className="share-social ul-li float-right">
                                            <ul>
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-category ul-li">
                                        <ul>
                                            <li><a href="#">fruits</a></li>
                                            <li><a href="#">veegetable</a></li>
                                            <li><a href="#">juices</a></li>
                                        </ul>
                                    </div>
                                    <div className="author-comment">
                                        <div className="author-img">
                                            <img src={require("../../assets/img/blog/ath.jpg")} alt="" />
                                        </div>
                                        <div className="author-designation-comment">
                                            BY: <span>FRANK LAMPARD</span>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                        </div>
                                    </div>
                                    <div className="next-prev-post">
                                        <div className="next-post-item float-left">
                                            <a href="#"><i className="fas fa-arrow-circle-left"></i>Previous Post</a>
                                        </div>

                                        <div className="next-post-item float-right">
                                            <a href="#">Next Post<i className="fas fa-arrow-circle-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-recent-post about-teacher-2">
                                    <div className="section-title-2  headline text-left">
                                        <h2><span>Related</span> News</h2>
                                    </div>
                                    <div className="recent-post-item">
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-comment-area ul-li about-teacher-2">
                                    <div className="section-title-2  headline text-left">
                                        <h2>Post <span>Comments.</span></h2>
                                    </div>

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
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
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
                                        <div className="section-title-2  headline text-left">
                                            <h2>Reply  <span>Comments.</span></h2>
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
                            <div className="col-md-3">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        );
    }
}

export default BlogSingle;