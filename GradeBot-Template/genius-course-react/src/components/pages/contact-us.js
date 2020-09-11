import React, { Component } from 'react';

import Header from '../layouts/header';
import Breadcrumb from '../layouts/breadcrumb';
import KeepInTouch from '../layouts/keepintouch';
import ContactForm from '../layouts/contact_form';
import ContactArea from '../layouts/contact_area';
import Footer from '../layouts/footer';


class ContactUs extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumb BreadcumbTitle="Genius" BreadcumbBigTitle="Contact" BreadcumbLinkText="Contact" />

                <KeepInTouch />
                <ContactForm />
                <ContactArea />
                <Footer />
            </div>
        );
    }
}

export default ContactUs;