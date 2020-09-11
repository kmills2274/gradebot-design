import React, { Component } from 'react';
import Header from '../layouts/header';
import Breadcrumb from '../layouts/breadcrumb';
import Footer from '../layouts/footer';

class Checkout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumb BreadcumbTitle="Genius" BreadcumbBigTitle="Checkout" BreadcumbLinkText="Checkout"/>
                <section id="checkout" className="checkout-section">
                    <div className="container">
                        <div className="section-title mb45 headline text-center">
                            <span className="subtitle text-uppercase">YOUR SHOPPING CART</span>
                            <h2>Complete<span> Your Purchases.</span></h2>
                        </div>
                        <div className="checkout-content">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="order-item mb65 course-page-section">
                                        <div className="section-title-2  headline text-left">
                                            <h2>Order <span>Item.</span></h2>
                                        </div>
                                        <div className="course-list-view table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr className="list-head">
                                                        <th>COURSE NAME</th>
                                                        <th>COURSE TYPE</th>
                                                        <th>STARTS</th>
                                                        <th>LENGTH</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="course-list-img-text">
                                                                <div className="course-list-img">
                                                                    <img src={require("../../assets/img/course/cl-1.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-list-text">
                                                                    <h3><a href="#">Fully Responsive Web Design &amp; Development.</a></h3>
                                                                    <div className="course-meta">
                                                                        <span className="course-category bold-font"><a href="#">$120.25</a></span>
                                                                        <div className="course-rate ul-li">
                                                                            <ul>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="course-type-list">
                                                                <span>Graphic Design &amp; 3D</span>
                                                            </div>
                                                        </td>
                                                        <td>6-06-2018</td>
                                                        <td className="dlt-price relative-position">
                                                            3 Months
                                                        <div className="check-dlt">
                                                                <a href="#"><i className="fas fa-times" /></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="course-list-img-text">
                                                                <div className="course-list-img">
                                                                    <img src={require("../../assets/img/course/cl-2.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-list-text">
                                                                    <h3><a href="#">Fully Responsive Web Design &amp; Development.</a></h3>
                                                                    <div className="course-meta">
                                                                        <span className="course-category bold-font"><a href="#">$120.25</a></span>
                                                                        <div className="course-rate ul-li">
                                                                            <ul>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="course-type-list">
                                                                <span>Graphic Design &amp; 3D</span>
                                                            </div>
                                                        </td>
                                                        <td>6-06-2018</td>
                                                        <td className="dlt-price relative-position">
                                                            3 Months
                                                        <div className="check-dlt">
                                                                <a href="#"><i className="fas fa-times" /></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="course-list-img-text">
                                                                <div className="course-list-img">
                                                                    <img src={require("../../assets/img/course/cl-3.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-list-text">
                                                                    <h3><a href="#">Fully Responsive Web Design &amp; Development.</a></h3>
                                                                    <div className="course-meta">
                                                                        <span className="course-category bold-font"><a href="#">$120.25</a></span>
                                                                        <div className="course-rate ul-li">
                                                                            <ul>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="course-type-list">
                                                                <span>Graphic Design &amp; 3D</span>
                                                            </div>
                                                        </td>
                                                        <td>6-06-2018</td>
                                                        <td className="dlt-price relative-position">
                                                            3 Months
                                                        <div className="check-dlt">
                                                                <a href="#"><i className="fas fa-times" /></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="course-list-img-text">
                                                                <div className="course-list-img">
                                                                    <img src={require("../../assets/img/course/cl-4.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-list-text">
                                                                    <h3><a href="#">Fully Responsive Web Design &amp; Development.</a></h3>
                                                                    <div className="course-meta">
                                                                        <span className="course-category bold-font"><a href="#">$120.25</a></span>
                                                                        <div className="course-rate ul-li">
                                                                            <ul>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="course-type-list">
                                                                <span>Graphic Design &amp; 3D</span>
                                                            </div>
                                                        </td>
                                                        <td>6-06-2018</td>
                                                        <td className="dlt-price relative-position">
                                                            3 Months
                                                        <div className="check-dlt">
                                                                <a href="#"><i className="fas fa-times" /></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="course-list-img-text">
                                                                <div className="course-list-img">
                                                                    <img src={require("../../assets/img/course/cl-5.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-list-text">
                                                                    <h3><a href="#">Fully Responsive Web Design &amp; Development.</a></h3>
                                                                    <div className="course-meta">
                                                                        <span className="course-category bold-font"><a href="#">$120.25</a></span>
                                                                        <div className="course-rate ul-li">
                                                                            <ul>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="course-type-list">
                                                                <span>Graphic Design &amp; 3D</span>
                                                            </div>
                                                        </td>
                                                        <td>6-06-2018</td>
                                                        <td className="dlt-price relative-position">
                                                            3 Months
                                                        <div className="check-dlt">
                                                                <a href="#"><i className="fas fa-times" /></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="course-list-img-text">
                                                                <div className="course-list-img">
                                                                    <img src={require("../../assets/img/course/cl-1.jpg")} alt="" />
                                                                </div>
                                                                <div className="course-list-text">
                                                                    <h3><a href="#">Fully Responsive Web Design &amp; Development.</a></h3>
                                                                    <div className="course-meta">
                                                                        <span className="course-category bold-font"><a href="#">$120.25</a></span>
                                                                        <div className="course-rate ul-li">
                                                                            <ul>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                                <li><i className="fas fa-star" /></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="course-type-list">
                                                                <span>Graphic Design &amp; 3D</span>
                                                            </div>
                                                        </td>
                                                        <td>6-06-2018</td>
                                                        <td className="dlt-price relative-position">
                                                            3 Months
                                                        <div className="check-dlt">
                                                                <a href="#"><i className="fas fa-times" /></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="order-payment">
                                        <div className="section-title-2  headline text-left">
                                            <h2>Order <span>Payment.</span></h2>
                                        </div>
                                        <div className="payment-method">
                                            <div className="payment-method-header">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="method-header-text">
                                                            <div className="checkbox">
                                                                <label>
                                                                    <input type="checkbox" defaultValue />
                                                                    <span className="cr"><i className="cr-icon fa fa-check" /></span>
                                                                    Credit or Debit Card
                                                            </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="payment-img float-right">
                                                            <img src={require("../../assets/img/banner/p-1.jpg")} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="check-out-form">
                                                <form action="#" method="post">
                                                    <div className="payment-info">
                                                        <label className=" control-label">Name On Card :</label>
                                                        <input type="text" className="form-control" name="name" placeholder="Enter the name of your card" defaultValue />
                                                    </div>
                                                    <div className="payment-info">
                                                        <label className=" control-label">Card Number :</label>
                                                        <input type="text" className="form-control" name="name" placeholder="Enter Your Number" defaultValue />
                                                    </div>
                                                    <div className="payment-info input-2">
                                                        <label className=" control-label">Expired Date :</label>
                                                        <input type="text" className="form-control" name="name" placeholder="MM" defaultValue />
                                                        <input type="text" className="form-control" name="name" placeholder="YY" defaultValue />
                                                    </div>
                                                    <div className="payment-info input-2">
                                                        <label className=" control-label">CVV :</label>
                                                        <input type="text" className="form-control" name="name" placeholder="CVV" defaultValue />
                                                    </div>
                                                    <div className="payment-info">
                                                        <label className=" control-label">Country :</label>
                                                        <input type="text" className="form-control" name="name" placeholder="Select Your Country" defaultValue />
                                                    </div>
                                                </form>
                                                <div className="method-header-text">
                                                    <div className="checkbox save-credit">
                                                        <label>
                                                            <input type="checkbox" defaultValue />
                                                            <span className="cr text-uppercase bold-font"><i className="cr-icon fa fa-check" /></span>
                                                            SAVE YOUR CREDIT CARD FOR FUTURE PURCHASES
                                                        <span className="sub-text">Your payment information is stored securely. <b>Learn More</b></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="payment-method-header">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="method-header-text">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" defaultValue />
                                                                <span className="cr"><i className="cr-icon fa fa-check" /></span>
                                                                Paypal
                                                        </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="payment-img float-right">
                                                        <img src={require("../../assets/img/banner/p-2.jpg")} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="genius-btn mt25 gradient-bg text-center text-uppercase  bold-font">
                                            <a href="#">Pay Now <i className="fas fa-caret-right" /></a>
                                        </div>
                                        <div className="terms-text pb45 mt25">
                                            <p>By confirming this purchase, I agree to the <b>Term of Use, Refund Policy</b>  and <b>Privacy Policy</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="side-bar-widget first-widget">
                                        <h2 className="widget-title text-capitalize">Order <span>Detail.</span></h2>
                                        <div className="sub-total-item">
                                            <span className="sub-total-title">SUBTOTAL</span>
                                            <div className="purchase-list mt15 ul-li-block">
                                                <ul>
                                                    <li>No Discount <span>$59.99</span></li>
                                                    <li>No Discount <span>$59.99</span></li>
                                                    <li>Discount 15% <span>$59.99</span></li>
                                                    <li>No Discount <span>$59.99</span></li>
                                                </ul>
                                                <div className="in-total">TOTAL <span>$759.99</span></div>
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
                                                        <i className="fas fa-bolt" />
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
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />

            </div>
        );
    }
}

export default Checkout;