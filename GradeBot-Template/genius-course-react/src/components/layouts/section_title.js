import React, { Component } from 'react';

const Title = "";
const BigTitle = "";
const BigTitle2 = "";

class SectionTitle extends Component {
    render() {
        return (
            <div className="section-title mb45 headline text-center">
                <span className="subtitle text-uppercase">{this.props.Title}</span>
                <h2>{this.props.BigTitle}<span> {this.props.BigTitle2}</span></h2>
            </div>
        );
    }
}

export default SectionTitle;