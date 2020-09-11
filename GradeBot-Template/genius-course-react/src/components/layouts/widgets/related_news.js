import React, { Component } from 'react';

class RelatedNews extends Component {
    render() {
        return (
            <div className="side-bar-widget">
                <h2 className="widget-title text-capitalize"><span>Related </span>News.</h2>
                <div className="latest-news-posts">
                    <div className="latest-news-area">
                        <div className="latest-news-thumbnile relative-position">
                            <img src={require("../../../assets/img/blog/lb-1.jpg")} alt="" />
                            <div className="hover-search">
                                <i className="fas fa-search"></i>
                            </div>
                            <div className="blakish-overlay"></div>
                        </div>
                        <div className="date-meta">
                            <i className="fas fa-calendar-alt"></i> 26 April 2018
											</div>
                        <h3 className="latest-title bold-font"><a href="#">Affiliate Marketing A Beginner’s Guide.</a></h3>
                    </div>

                    <div className="latest-news-posts">
                        <div className="latest-news-area">
                            <div className="latest-news-thumbnile relative-position">
                                <img src={require("../../../assets/img/blog/lb-2.jpg")} alt="" />
                                <div className="hover-search">
                                    <i className="fas fa-search"></i>
                                </div>
                                <div className="blakish-overlay"></div>
                            </div>
                            <div className="date-meta">
                                <i className="fas fa-calendar-alt"></i> 26 April 2018
												</div>
                            <h3 className="latest-title bold-font"><a href="#">No.1 The Best Online Course 2018.</a></h3>
                        </div>
                    </div>

                    <div className="view-all-btn bold-font">
                        <a href="#">View All News <i className="fas fa-chevron-circle-right"></i></a>
                    </div>
                </div>
            </div>

        );
    }
}

export default RelatedNews;