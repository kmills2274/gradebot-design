import React from "react";

import OwlCarousel from 'react-owl-carousel';


const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: false,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1000: {
      items: 3,

    }
  },
};

const GrayBg = "popular-course-section popular-three";

class PopularCourse extends React.Component {
  render() {
    return (
      <section id="popular-course" className={this.props.GrayBg === true ? 'popular-course-section popular-three' : 'popular-course-section'}>
        <div className="container">
          <div className="section-title mb20 headline text-left ">
            <span className="subtitle text-uppercase">LEARN NEW SKILLS</span>
            <h2>
              <span>Popular</span> Courses.
            </h2>
          </div>
          <OwlCarousel id="course-slide-item" className="course-slide owl-carousel" {...options}>
            <div className="course-item-pic-text ">
              <div className="course-pic relative-position mb25">
                <img src={require('../../assets/img/course/c-1.jpg')} alt="" />
                <div className="course-price text-center gradient-bg">
                  <span>$99.00</span>
                </div>
                <div className="course-details-btn">
                  <a href="#">
                    COURSE DETAIL <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="course-item-text">
                <div className="course-meta">
                  <span className="course-category bold-font">
                    <a href="#">Web Design</a>
                  </span>
                  <span className="course-author bold-font">
                    <a href="#">John Luis Fernandes</a>
                  </span>
                  <div className="course-rate ul-li">
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="course-title mt10 headline pb45 relative-position">
                  <h3>
                    <a href="#">Fully Responsive Web Design & Development.</a>{" "}
                    <span className="trend-badge text-uppercase bold-font">
                      <i className="fas fa-bolt" /> TRENDING
                    </span>
                  </h3>
                </div>
                <div className="course-viewer ul-li">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-user" /> 1.220
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-comment-dots" /> 1.015
                      </a>
                    </li>
                    <li>
                      <a href="#">125k Unrolled</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="course-item-pic-text ">
              <div className="course-pic relative-position mb25">
                <img src={require('../../assets/img/course/c-2.jpg')} alt="" />
                <div className="course-price text-center gradient-bg">
                  <span>$99.00</span>
                </div>
                <div className="course-details-btn">
                  <a href="#">
                    COURSE DETAIL <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="course-item-text">
                <div className="course-meta">
                  <span className="course-category bold-font">
                    <a href="#">Mobile Apps</a>
                  </span>
                  <span className="course-author bold-font">
                    <a href="#">Fernando Torres</a>
                  </span>
                  <div className="course-rate ul-li">
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="course-title mt10 headline pb45 relative-position">
                  <h3>
                    <a href="#">
                      Introduction to Mobile Application Development.
                    </a>
                  </h3>
                </div>
                <div className="course-viewer ul-li">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-user" /> 1.220
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-comment-dots" /> 1.015
                      </a>
                    </li>
                    <li>
                      <a href="#">125k Unrolled</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="course-item-pic-text ">
              <div className="course-pic relative-position mb25">
                <img src={require('../../assets/img/course/c-3.jpg')} alt="" />
                <div className="course-price text-center gradient-bg">
                  <span>$99.00</span>
                </div>
                <div className="course-details-btn">
                  <a href="#">
                    COURSE DETAIL <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="course-item-text">
                <div className="course-meta">
                  <span className="course-category bold-font">
                    <a href="#">Motion Graphic </a>
                  </span>
                  <span className="course-author bold-font">
                    <a href="#">enny Garcias</a>
                  </span>
                  <div className="course-rate ul-li">
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="course-title mt10 headline pb45 relative-position">
                  <h3>
                    <a href="#">Learning IOS Apps Programming & Development.</a>
                  </h3>
                </div>
                <div className="course-viewer ul-li">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-user" /> 1.220
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-comment-dots" /> 1.015
                      </a>
                    </li>
                    <li>
                      <a href="#">125k Unrolled</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="course-item-pic-text">
              <div className="course-pic relative-position mb25">
                <img src={require('../../assets/img/course/c-2.jpg')} alt="" />
                <div className="course-price text-center gradient-bg">
                  <span>$99.00</span>
                </div>
                <div className="course-details-btn">
                  <a href="#">
                    COURSE DETAIL <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="course-item-text">
                <div className="course-meta">
                  <span className="course-category bold-font">
                    <a href="#">Web Design</a>
                  </span>
                  <span className="course-author bold-font">
                    <a href="#">John Luis Fernandes</a>
                  </span>
                  <div className="course-rate ul-li">
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="course-title mt10 headline pb45 relative-position">
                  <h3>
                    <a href="#">Fully Responsive Web Design & Development.</a>{" "}
                    <span className="trend-badge text-uppercase bold-font">
                      <i className="fas fa-bolt" /> TRENDING
                    </span>
                  </h3>
                </div>
                <div className="course-viewer ul-li">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-user" /> 1.220
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-comment-dots" /> 1.015
                      </a>
                    </li>
                    <li>
                      <a href="#">125k Unrolled</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="course-item-pic-text">
              <div className="course-pic relative-position mb25">
                <img src={require('../../assets/img/course/c-3.jpg')} alt="" />
                <div className="course-price text-center gradient-bg">
                  <span>$99.00</span>
                </div>
                <div className="course-details-btn">
                  <a href="#">
                    COURSE DETAIL <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="course-item-text">
                <div className="course-meta">
                  <span className="course-category bold-font">
                    <a href="#">Web Design</a>
                  </span>
                  <span className="course-author bold-font">
                    <a href="#">John Luis Fernandes</a>
                  </span>
                  <div className="course-rate ul-li">
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="course-title mt10 headline pb45 relative-position">
                  <h3>
                    <a href="#">Fully Responsive Web Design & Development.</a>{" "}
                    <span className="trend-badge text-uppercase bold-font">
                      <i className="fas fa-bolt" /> TRENDING
                    </span>
                  </h3>
                </div>
                <div className="course-viewer ul-li">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-user" /> 1.220
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-comment-dots" /> 1.015
                      </a>
                    </li>
                    <li>
                      <a href="#">125k Unrolled</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="course-item-pic-text">
              <div className="course-pic relative-position mb25">
                <img src={require('../../assets/img/course/c-1.jpg')} alt="" />
                <div className="course-price text-center gradient-bg">
                  <span>$99.00</span>
                </div>
                <div className="course-details-btn">
                  <a href="#">
                    COURSE DETAIL <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="course-item-text">
                <div className="course-meta">
                  <span className="course-category bold-font">
                    <a href="#">Web Design</a>
                  </span>
                  <span className="course-author bold-font">
                    <a href="#">John Luis Fernandes</a>
                  </span>
                  <div className="course-rate ul-li">
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="course-title mt10 headline pb45 relative-position">
                  <h3>
                    <a href="#">Fully Responsive Web Design & Development.</a>{" "}
                    <span className="trend-badge text-uppercase bold-font">
                      <i className="fas fa-bolt" /> TRENDING
                    </span>
                  </h3>
                </div>
                <div className="course-viewer ul-li">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-user" /> 1.220
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-comment-dots" /> 1.015
                      </a>
                    </li>
                    <li>
                      <a href="#">125k Unrolled</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </OwlCarousel>
        </div>
      </section>
    );
  }
}

export default PopularCourse;
