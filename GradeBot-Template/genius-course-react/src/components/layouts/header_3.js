import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from './login';

class HeaderTwo extends Component {
    render() {
        return (
            <div>
                <header className="header_3 gradient-bg">
                    <div className="container">
                        <div className="navbar-default">
                            <div className="navbar-header float-left">
                                <Link className="navbar-brand text-uppercase" to="#"><img src={require("../../assets/img/logo/logo-2.png")} alt="logo" /></Link>
                            </div>
                            <div className="header-info ul-li">
                                <ul>
                                    <li>
                                        <div className="mail-phone">
                                            <div className="info-icon">
                                                <i className="text-gradiant fas fa-envelope"></i>
                                            </div>
                                            <div className="info-content">
                                                <span className="info-id">info@genius.com</span>
                                                <span className="info-text">Email Us For Free Registration</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mail-phone">
                                            <div className="info-icon">
                                                <i className="text-gradiant fas fa-phone-square"></i>
                                            </div>
                                            <div className="info-content">
                                                <span className="info-id">(100) 2443 900</span>
                                                <span className="info-text">Call Us For Free Registration</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a to="#">
                                            <div className="info-social">
                                                <i className="fab fa-facebook-f"></i>
                                            </div>
                                            <span className="info-text">Facebook</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a to="#">
                                            <div className="info-social">
                                                <i className="fab fa-twitter"></i>
                                            </div>
                                            <span className="info-text">Twitter</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="nav-menu-4">
                                <div className="login-cart-lang float-right ul-li">
                                    <ul className="search_cart">
                                        <li>
                                            <div className="cart_search">
                                                <a href="#">
                                                    <i className="fas fa-shopping-bag"></i>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="cart_search">
                                                <button type="button" className="toggle-overlay search-btn">
                                                    <i className="fas fa-search"></i>
                                                </button>
                                            </div>
                                            <div className="search-body">
                                                <div className="search-form">
                                                    <form action="#">
                                                        <input className="search-input" type="search" placeholder="Search Here" />
                                                        <div className="outer-close toggle-overlay">
                                                            <button type="button" className="search-close">
                                                                <i className="fas fa-times"></i>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="lang-login">
                                        <li>
                                            <div className="select-lang">
                                                <select>
                                                    <option value="9">English</option>
                                                    <option value="10">Bangla</option>
                                                    <option value="11">Arabia</option>
                                                    <option value="12">Dutch</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="login">
                                                <a data-toggle="modal" data-target="#myModal" href="#">LogIn</a>
                                            </div>
                                            <Login />
                                        </li>

                                    </ul>
                                </div>
                                <nav className="navbar-menu float-left">
                                    <div className="nav-menu ul-li">
                                        <ul className="quick-menu">
                                            <li><a href="#slide">Home</a></li>
                                            <li><a href="#search-course">Course</a></li>
                                            <li><a href="#about-us">About Us</a></li>
                                            <li><a href="#genius-teacher-2">Teachers</a></li>
                                            <li><a href="#best-product">Shop</a></li>
                                            <li><a href="#faq">Faq</a></li>
                                            <li><a href="#latest-area">BLOG</a></li>
                                            <li><a href="#contact-form">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>

                </header>
                <div className="altranative-header ul-li-block">
                    <div id="menu-container">

                        <div className="menu-wrapper">
                            <div className="row">

                                <button type="button" className="alt-menu-btn float-left">
                                    <span className="hamburger-menu"></span>
                                </button>

                                <div className="logo-area">
                                    <Link to="/">
                                        <img src={require("../../assets/img/logo/logo.png")} alt="Logo_not_found" />
                                    </Link>
                                </div>

                                <div className="cart-btn pulse  ul-li float-right">
                                    <ul>
                                        <li><a data-toggle="modal" data-target="#myModal-2" to="#"><i className="fas fa-user"></i></a>
                                        </li>
                                        <li><a to="#"><i className="fas fa-shopping-bag"></i></a></li>
                                    </ul>
                                    <Login />
                                </div>
                            </div>

                            <ul className="menu-list accordion">
                                <li className="alt-search">
                                    <form action="#">
                                        <input type="search" placeholder="search" />
                                    </form>
                                </li>
                                <li className="card">
                                    <Link className="menu-link" to="index-1.html">Home</Link>
                                </li>
                                <li className="card"><a className="menu-link" href="#slide">Home</a></li>
                                <li className="card"><a className="menu-link" href="#search-course">Course</a></li>
                                <li className="card"><a className="menu-link" href="#about-us">About Us</a></li>
                                <li className="card"><a className="menu-link" href="#genius-teacher-2">Teachers</a></li>
                                <li className="card"><a className="menu-link" href="#best-product">Shop</a></li>
                                <li className="card"><a className="menu-link" href="#faq">Faq</a></li>
                                <li className="card"><a className="menu-link" href="#latest-area">BLOG</a></li>
                                <li className="card"><a className="menu-link" href="#contact-form">Contact Us</a></li>

                                <li className="card active">
                                    <div className="card-header" id="heading1">
                                        <button className="menu-link" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            Service
							                </button>
                                    </div>
                                    <ul id="collapse1" className="submenu collapse show" aria-labelledby="heading1" data-parent="#accordion">
                                        <li className="active"><Link to="/">Service</Link></li>
                                        <li><Link to="/">Service Details</Link></li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderTwo;