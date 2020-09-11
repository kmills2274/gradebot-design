import React, { Component } from 'react';

const BreadcumbTitle = "Genius";
const BreadcumbBigTitle = "Contact";
const BreadcumbLinkText = "Contact";

class Breadcrumb extends Component {
    render() {
        return (
            <div>
                <section id="breadcrumb" className="breadcrumb-section relative-position backgroud-style">
                    <div className="blakish-overlay"></div>
                    <div className="container">
                        <div className="page-breadcrumb-content text-center">
                            <div className="page-breadcrumb-title">
                                <h2 className="breadcrumb-head black bold">{this.props.BreadcumbTitle} <span>{this.props.BreadcumbBigTitle}</span></h2>
                            </div>
                            <div className="page-breadcrumb-item ul-li">
                                <ul className="breadcrumb text-uppercase black">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item active">{this.props.BreadcumbLinkText}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Breadcrumb;