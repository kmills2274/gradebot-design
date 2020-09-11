import React, { Component } from 'react';

class ShopSidebar extends Component {
    render() {
        return (
            <div>
                <div className="side-bar-widget first-widget">
                    <h2 className="widget-title text-capitalize">Shop <span>Categories.</span></h2>
                    <div className="post-categori ul-li-block">
                        <ul>
                            <li className="cat-item"><a href="#">Design Graphic Book</a></li>
                            <li className="cat-item"><a href="#">Student Bag’s</a></li>
                            <li className="cat-item"><a href="#">Education T-shirt</a></li>
                            <li className="cat-item"><a href="#">Student Watch</a></li>
                            <li className="cat-item"><a href="#">Tutorial Videos</a></li>
                            <li className="cat-item"><a href="#">Other Products</a></li>
                        </ul>
                    </div>
                </div>

                <div className="side-bar-widget">
                    <h2 className="widget-title text-capitalize">Sort By <span>Price.</span></h2>
                    <div className="price-range relative-position">
                        <div className="inner-title text-uppercase">Price </div>
                        <input className="price-txt" type="text" id="amount" />
                        <div id="slider-range"></div>
                    </div>
                </div>

                <div className="side-bar-widget">
                    <h2 className="widget-title text-capitalize">Product <span>Highlights.</span></h2>
                    <div className="product-highlights ul-li-block">
                        <ul>
                            <li className="inner-title text-uppercase">DEALS OF THE DAY</li>
                            <li className="inner-title text-uppercase">FREE SHIPPING</li>
                            <li className="inner-title text-uppercase">BEST SELLERS</li>
                            <li className="inner-title text-uppercase">FEATURED PRODUCTS</li>
                        </ul>
                    </div>
                </div>

                <div className="side-bar-widget">
                    <h2 className="widget-title text-capitalize">Best <span>Sellers.</span></h2>
                    <div className="best-sellers-item">
                        <div className="best-sellers-pic-text">
                            <div className="best-sell-pic">
                                <img src={require("../../assets/img/product/bs-1.png")} alt="" />
										</div>
                                <div className="best-sell-title-price">
                                    <h3><a href="#">ELEGANT WOMEN HANDBAG’S</a></h3>
                                    <div className="b-price">
                                        $130.25
											</div>
                                </div>
                            </div>
                            <div className="best-sellers-pic-text">
                                <div className="best-sell-pic">
                                    <img src={require("../../assets/img/product/bs-1.png")} alt="" />
										</div>
                                    <div className="best-sell-title-price">
                                        <h3><a href="#">ELEGANT WOMEN HANDBAG’S</a></h3>
                                        <div className="b-price">
                                            $130.25
											</div>
                                    </div>
                                </div>

                                <div className="couse-pagination text-center ul-li">
                                    <ul>
                                        <li className="pg-text"><a href="#"><i className="fas fa-long-arrow-alt-left"></i> PREV</a></li>
                                        <li><a href="#">01</a></li>
                                        <li className="active"><a href="#">02</a></li>
                                        <li><a href="#">03</a></li>
                                        <li className="pg-text"><a href="#">NEXT <i className="fas fa-long-arrow-alt-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="side-bar-widget">
                            <h2 className="widget-title text-capitalize"><span>Product </span>Tags.</h2>
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
                
export default ShopSidebar;