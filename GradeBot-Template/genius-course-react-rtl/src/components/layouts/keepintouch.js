import React, { Component } from 'react';
import SectionTitle from './section_title';

class KeepInTouch extends Component {
    render() {
        return (
            <div>
                <section id="contact-page" className="contact-page-section">
                    <div className="container">
                        <SectionTitle Title="SEND US A MESSAGE" BigTitle="Keep" BigTitle2="In Touch" />
                        <div className="social-contact">
                            <div className="category-icon-title text-center">
                                <div className="category-icon">
                                    <i className="text-gradiant fab fa-facebook-f"></i>
                                </div>
                                <div className="category-title">
                                    <h4>Facebbok</h4>
                                </div>
                            </div>
                            <div className="category-icon-title text-center">
                                <div className="category-icon">
                                    <i className="text-gradiant fab fa-twitter"></i>
                                </div>
                                <div className="category-title">
                                    <h4>Twitter</h4>
                                </div>
                            </div>
                            <div className="category-icon-title text-center">
                                <div className="category-icon">
                                    <i className="text-gradiant fab fa-google-plus-g"></i>
                                </div>
                                <div className="category-title">
                                    <h4>Google +</h4>
                                </div>
                            </div>
                            <div className="category-icon-title text-center">
                                <div className="category-icon">
                                    <i className="text-gradiant fab fa-behance"></i>
                                </div>
                                <div className="category-title">
                                    <h4>Behance</h4>
                                </div>
                            </div>
                            <div className="category-icon-title text-center">
                                <div className="category-icon">
                                    <i className="text-gradiant fab fa-instagram"></i>
                                </div>
                                <div className="category-title">
                                    <h4>Instagram</h4>
                                </div>
                            </div>
                            <div className="category-icon-title text-center">
                                <div className="category-icon">
                                    <i className="text-gradiant fab fa-dribbble"></i>
                                </div>
                                <div className="category-title">
                                    <h4>Dribble</h4>
                                </div>
                            </div>
                            <div className="category-icon-title text-center">
                                <div className="category-icon">
                                    <i className="text-gradiant fab fa-deviantart"></i>
                                </div>
                                <div className="category-title">
                                    <h4>Devianart</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default KeepInTouch;