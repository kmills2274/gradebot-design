import React, { Component } from 'react';

class FeaturedCourse extends Component {
    render() {
        return (
            <div className="side-bar-widget" >
                <h2 className="widget-title text-capitalize"><span>Featured</span> Course.</h2>
                <div className="featured-course">
                    <div className="best-course-pic-text relative-position">
                        <div className="best-course-pic relative-position">
                            <img src={require("../../../assets/img/blog/fb-1.jpg")} alt="" />
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
            </div >
        );
    }
}

export default FeaturedCourse;