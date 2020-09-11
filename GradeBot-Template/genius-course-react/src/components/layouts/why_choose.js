import React, { Component } from 'react';

class WhyChooseUsTwo extends Component {
    render() {
        return (
            <section id="why-choose" className="why-choose-section backgroud-style">
                <div className="container">
                    <div className="section-title mb20 headline text-center">
                        <span className="subtitle text-uppercase">GENIUS ADVANTAGES</span>
                        <h2>Reason <span>Why Choose Genius.</span></h2>
                    </div>
                    <div className="extra-features-content">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="extra-left">
                                    <div className="extra-left-content ">
                                        <div className="extra-icon-text text-left">
                                            <div className="features-icon gradient-bg text-center">
                                                <i className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i>
                                            </div>
                                            <div className="features-text">
                                                <div className="features-text-title">
                                                    <h3>The Power Of Education.</h3>
                                                </div>
                                                <div className="features-text-dec">
                                                    <span>Lorem ipsum dolor sit amet consectuerer adipiscing elit set diam non nibh euismod tincidun laoreet.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="extra-left-content ">
                                        <div className="extra-icon-text">
                                            <div className="features-icon gradient-bg text-center">
                                                <i className=" flaticon-clipboard-with-pencil"></i>
                                            </div>
                                            <div className="features-text pt25">
                                                <div className="features-text-title">
                                                    <h3>Best Online Education.</h3>
                                                </div>
                                                <div className="features-text-dec">
                                                    <span>Lorem ipsum dolor sit amet consectuerer adipiscing elit set diam non nibh euismod tincidun laoreet.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="extra-left-content ">
                                        <div className="extra-icon-text">
                                            <div className="features-icon gradient-bg text-center">
                                                <i className="flaticon-list"></i>
                                            </div>
                                            <div className="features-text pt25">
                                                <div className="features-text-title">
                                                    <h3>Education For Student.</h3>
                                                </div>
                                                <div className="features-text-dec">
                                                    <span>Lorem ipsum dolor sit amet consectuerer adipiscing elit set diam non nibh euismod tincidun laoreet.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="extra-pic text-center ">
                                    <img src={require("../../assets/img/banner/wc-2.png")} alt="img" />
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="extra-right">
                                    <div className="extra-left-content ">
                                        <div className="extra-icon-text text-right">
                                            <div className="features-icon gradient-bg text-center">
                                                <i className="flaticon-ruler-and-pencil"></i>
                                            </div>
                                            <div className="features-text pt25">
                                                <div className="features-text-title text-right pb10">
                                                    <h3>The Power Of Education.</h3>
                                                </div>
                                                <div className="features-text-dec text-right">
                                                    <span>Lorem ipsum dolor sit amet consectuerer adipiscing elit set diam non nibh euismod tincidun laoreet.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="extra-left-content ">
                                        <div className="extra-icon-text text-right">
                                            <div className="features-icon gradient-bg text-center">
                                                <i className="flaticon-clipboards"></i>
                                            </div>
                                            <div className="features-text pt25">
                                                <div className="features-text-title text-right pb10">
                                                    <h3>Best Online Education.</h3>
                                                </div>
                                                <div className="features-text-dec text-right">
                                                    <span>Lorem ipsum dolor sit amet consectuerer adipiscing elit set diam non nibh euismod tincidun laoreet.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="extra-left-content ">
                                        <div className="extra-icon-text text-right">
                                            <div className="features-icon gradient-bg text-center">
                                                <i className="flaticon-pie-chart"></i>
                                            </div>
                                            <div className="features-text pt25">
                                                <div className="features-text-title text-right pb10">
                                                    <h3>Education For Student.</h3>
                                                </div>
                                                <div className="features-text-dec text-right">
                                                    <span>Lorem ipsum dolor sit amet consectuerer adipiscing elit set diam non nibh euismod tincidun laoreet.</span>
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
        );
    }
}

export default WhyChooseUsTwo;