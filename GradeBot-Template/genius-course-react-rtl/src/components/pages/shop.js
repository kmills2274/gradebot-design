import React, { Component } from 'react';
import Header from '../layouts/header';
import BreadcrumbSection from '../layouts/breadcrumb';
import ShopSidebar from '../layouts/shop_sidebar';
import BestProduct from '../layouts/best_product';
import Footer from '../layouts/footer';

class Shop extends Component {

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
                <BreadcrumbSection BreadcumbTitle="Genius" BreadcumbBigTitle="Online Shop" BreadcumbLinkText="Shop" />
                <section id="shop-product" className="shop-product-section">
                    <div className="container">
                        <div className="product-item">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="shop-product-item">
                                        <div className="short-filter-tab">
                                            <div className="shorting-filter  float-left">
                                                <span><b>Sort</b> By</span>
                                                <select>
                                                    <option value="9">Popularity</option>
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
                                        <div className="product-showcase">
                                            <div className="genius-shop-item">
                                                <div className="tab-container">
                                                    <div id="tab1" className="tab-content-1 best-product-section">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-1.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-2.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-3.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-4.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-5.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-6.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-1.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-4.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-6.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-5.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-1.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-2.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-1.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-6.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-4.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-5.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-3.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="product-img-text">
                                                                    <div className="product-img text-center mb20">
                                                                        <img src={require("../../assets/img/product/bp-1.png")} alt="" />
                                                                    </div>
                                                                    <div className="product-text-content relative-position">
                                                                        <div className="best-title-price float-left">
                                                                            <div className="course-title headline">
                                                                                <h3><a href="#">Mobile Apps Books.</a></h3>
                                                                            </div>
                                                                            <div className="price-start">
                                                                                Start from
																		<span>$55.25</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-cart text-center">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div id="tab2" className="tab-content-1 course-page-section">
                                                        <div className="course-list-view">
                                                            <table>
                                                                <thead className="list-head">
                                                                    <tr>
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
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <ShopSidebar />
                                </div>
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


export default Shop;