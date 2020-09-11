import React, { Component } from 'react';

class PopularTags extends Component {
    render() {
        return (
            <div className="side-bar-widget">
                <h2 className="widget-title text-capitalize">Popular <span>Tags.</span></h2>
                <div className="tag-clouds ul-li">
                    <ul>
                        <li><a href="#">fruits</a></li>
                        <li><a href="#">veegetable</a></li>
                        <li><a href="#">juices</a></li>
                        <li><a href="#">natural food</a></li>
                        <li><a href="#">food</a></li>
                        <li><a href="#">bread</a></li>
                        <li><a href="#">natural</a></li>
                        <li><a href="#">healthy</a></li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default PopularTags;