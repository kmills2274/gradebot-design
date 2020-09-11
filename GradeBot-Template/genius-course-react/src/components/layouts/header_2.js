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
            <header>
                <div id="main-menu" className="main-menu-container header-style-2">
                    <div className="header-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="header-top-text">
                                        <span>Online Course Photoshop Template</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="header-top-bar ul-li">
                                        <ul>
                                            <li><i className="fas fa-phone-square"></i>Call Us +100 375 8899</li>
                                            <li>
                                                <select>
                                                    <option value="9">English</option>
                                                    <option value="10">Bangla</option>
                                                    <option value="11">Arbia</option>
                                                    <option value="12">France</option>
                                                </select>
                                            </li>
                                            <li><a data-toggle="modal" data-target="#myModal" href="#">Log In</a>
                                                <Login />
                                            </li>
                                            <li><a href="#"><i className="fas fa-shopping-bag"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-menu">
                        <div className="container">
                            <div className="navbar-default">
                                <div className="navbar-header float-left">
                                    <Link className="navbar-brand text-uppercase" to="/">
                                        <img src={require('../../assets/img/logo/f-logo.png')} alt="logo" />
                                    </Link>
                                    </div>
                                    <div className="cart-search float-right ul-li">
                                    <ul>
                                        <li>
                                            <button type="button" className="toggle-overlay search-btn">
                                                <i className="fas fa-search"></i>
                                            </button>

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
                                </div>
                                <nav className="navbar-menu float-right">
                                    <div className="nav-menu ul-li">
                                        <ul>
                                            <li className="menu-item-has-children ul-li-block">
                                                <Link to="/">Home</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/">Home 1</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/home-2">Home 2</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/home-3">Home 3</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/home-4">Home 4</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/about-us">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">shop</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact Us</Link>
                                            </li>
                                            <li className="menu-item-has-children ul-li-block">
                                                <Link to="/#!">Pages</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/teacher">Teacher</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/teacher-details">Teacher Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/blog">Blog</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/blog-single">Blog Single</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/course">Course</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/course-details">Course Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/faq">FAQ</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/checkout">CheckOut</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>

                                <div className="mobile-menu">
                                    <div className="logo"><Link to="/"><img src={require("../../assets/img/logo/logo.png")} alt="Logo" /></Link></div>
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link to="/">Home</Link>
                                                <ul>
                                                    <li>
                                                        <Link to="/">Home 1</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/home-2">Home 2</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/home-3">Home 3</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/home-4">Home 4</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/about-us">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">shop</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/#!">Pages</Link>
                                                <ul>
                                                    <li>
                                                        <Link to="/teacher">Teacher</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/teacher-details">Teacher Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/blog">Blog</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/blog-single">Blog Single</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/course">Course</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/course-details">Course Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/faq">FAQ</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/checkout">CheckOut</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </nav>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderTwo;