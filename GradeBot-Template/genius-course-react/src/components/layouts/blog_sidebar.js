import React, { Component } from 'react';

import PopularTags from './widgets/popular_tags'
import FeaturedCourse from './widgets/featured_course'
import RelatedNews from './widgets/related_news'

class BlogSidebar extends Component {
    render() {
        return (
            <div className="side-bar">
                <div className="side-bar-search">
                    <form action="#" method="get">
                        <input type="text" className="" placeholder="Search" />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>

                <div className="side-bar-widget">
                    <h2 className="widget-title text-capitalize">blog <span>Categories.</span></h2>
                    <div className="post-categori ul-li-block">
                        <ul>
                            <li className="cat-item"><a href="#">Design Graphic Book</a></li>
                            <li className="cat-item"><a href="#">Student Bag’s</a></li>
                            <li className="cat-item"><a href="#">Education T-shirt</a></li>
                            <li className="cat-item"><a href="#">Student Watch</a></li>
                            <li className="cat-item"><a href="#">Tutorial Videos</a></li>
                            <li className="cat-item"><a href="#">Other Products</a></li>
                        </ul>
                    </div>
                </div>
                <RelatedNews />
                <PopularTags />
                <FeaturedCourse />
            </div>
        );
    }
}

export default BlogSidebar;