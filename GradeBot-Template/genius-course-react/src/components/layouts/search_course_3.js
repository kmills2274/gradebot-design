import React, { Component } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class SearchCourseThree extends Component {
    render() {
        return (
            <section id="search-course" className="search-course-section search-course-third">
                <div className="container">
                    <div className="search-counter-up">
                        <div className="version-four">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="counter-icon-number">
                                        <div className="counter-icon">
                                            <i className="text-gradiant flaticon-graduation-hat"></i>
                                        </div>
                                        <div className="counter-number">
                                            
                                            <CountUp end={5} redraw={true}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span className="counter-count bold-font" ref={countUpRef}></span>
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                            <p>Students Enrolled</p>
                                        </div>
                                    </div>
                                </div>
    
							<div className="col-md-3">
                                    <div className="counter-icon-number">
                                        <div className="counter-icon">
                                            <i className="text-gradiant flaticon-book"></i>
                                        </div>
                                        <div className="counter-number">
                                            <CountUp end={122} redraw={true}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span className="counter-count bold-font" ref={countUpRef}></span>
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                            <span>.500+</span>
                                            <p>Online Available Courses</p>
                                        </div>
                                    </div>
                                </div>
    
							<div className="col-md-3">
                                    <div className="counter-icon-number">
                                        <div className="counter-icon">
                                            <i className="text-gradiant flaticon-favorites-button"></i>
                                        </div>
                                        <div className="counter-number">
                                            <CountUp end={15} redraw={true}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span className="counter-count bold-font" ref={countUpRef}></span>
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                            <span>.000+</span>
                                            <p>Premium Quality Products</p>
                                        </div>
                                    </div>
                                </div>
    
							<div className="col-md-3">
                                    <div className="counter-icon-number">
                                        <div className="counter-icon">
                                            <i className="text-gradiant flaticon-group"></i>
                                        </div>
                                        <div className="counter-number">
                                            <CountUp end={7} redraw={true}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span className="counter-count bold-font" ref={countUpRef}></span>
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                            <span>.500+</span>
                                            <p>Teachers Registered</p>
                                        </div>
                                    </div>
                                </div>
						</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SearchCourseThree;