import React, { Component } from 'react';

class Preloader extends Component {
    componentDidMount(){
        jQuery(window).on('load', function () {
            jQuery('#preloader').fadeOut('slow', function () { jQuery(this).delay(3000).hide(); });
        });
    }

    render() {
        return (
            <div id="preloader"></div>
        );
    }
}

export default Preloader;