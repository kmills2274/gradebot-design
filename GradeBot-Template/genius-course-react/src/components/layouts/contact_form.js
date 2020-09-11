import React, { Component } from 'react';

const GrayBg = true;
class ContactForm extends Component {
    render() {
        return (
            <section id="contact-form" className={this.props.GrayBg === true ? 'contact-form-area_3' : 'contact-form-area_3  contact-page-version'}>
                <div className="container">
                    <div className="section-title mb45 headline text-center">
                        <span className="subtitle text-uppercase">Send us a message</span>
                        <h2>Send Us A<span> Message.</span></h2>
                    </div>

                    <div className="contact_third_form">
                        <form className="contact_form" action="#" method="POST" encType="multipart/form-data">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="contact-info">
                                        <input className="name" name="name" type="text" placeholder="Your Name." />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="contact-info">
                                        <input className="email" name="email" type="email" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="contact-info">
                                        <input className="number" name="number" type="number" placeholder="Phone Number" />
                                    </div>
                                </div>
                            </div>
                            <textarea placeholder="Message."></textarea>
                            <div className="nws-button text-center  gradient-bg text-uppercase">
                                <button type="submit" value="Submit">SEND EMAIL <i className="fas fa-caret-right"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactForm;