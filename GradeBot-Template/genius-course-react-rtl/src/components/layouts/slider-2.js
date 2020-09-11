import React from "react";

import OwlCarousel from 'react-owl-carousel';



class SliderTwo extends React.Component {
  render() {
    return (
      <section id="slide" className="slider-section">
        <OwlCarousel id="slider-item" className="slider-item-details owl-carousel"
          loop
          rtlClass={"owl-rtl"}
          nav
          smartSpeed={1000}
          items={1}
          navText={["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"]}
        >
          <div className="slider-area slider-bg-5 relative-position">
            <div className="slider-text">
              <div className="section-title mb20 headline text-left ">
                <div className="layer-1-1">
                  <span className="subtitle ml42 text-uppercase">The Online Learning Management System</span>
                </div>
                <div className="layer-1-3">
                  <h2><span>Inventive</span> Solution <br /> for <span>Education</span></h2>
                </div>
              </div>
              <div className="layer-1-4">
                <div className="genius-btn  text-center text-uppercase ul-li-block bold-font">
                  <a href="#">Our Courses <i className="fas fa-caret-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-area slider-bg-2 relative-position">
            <div className="slider-text">
              <div className="section-title mb20 headline text-center ">
                <div className="layer-1-1">
                  <span className="subtitle text-uppercase">The Online Learning Management System</span>
                </div>
                <div className="layer-1-2">
                  <h2 className="secoud-title"> Browse The <span>Best Courses.</span></h2>
                </div>
              </div>
              <div className="layer-1-3">
                <div className="search-course mb30 relative-position">
                  <form action="#" method="post">
                    <input className="course" name="course" type="text" placeholder="Type what do you want to learn today?" />
                    <div className="nws-button text-center  gradient-bg text-capitalize">
                      <button type="submit" value="Submit">Search Course</button>
                    </div>
                  </form>
                </div>
                <div className="layer-1-4">
                  <div className="slider-course-category ul-li text-center">
                    <span className="float-left">BY CATEGORY:</span>
                    <ul>
                      <li>Graphics Design</li>
                      <li>Web Design</li>
                      <li>Mobile Application</li>
                      <li>Enginering</li>
                      <li>Science</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-area slider-bg-3 relative-position">
            <div className="slider-text">
              <div className="layer-1-2">
                <div className="coming-countdown ul-li">
                  <ul>
                    <li className="days">
                      <span className="number"></span>
                      <span>Days</span>
                    </li>

                    <li className="hours">
                      <span className="number"></span>
                      <span>Hours</span>
                    </li>

                    <li className="minutes">
                      <span className="number"></span>
                      <span>Minutes</span>
                    </li>

                    <li className="seconds">
                      <span className="number"></span>
                      <span>Seconds</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section-title mb20 headline text-center ">
                <div className="layer-1-3">
                  <h2 className="third-slide"> Mobile Application Experiences : <br /> <span>Mobile App Design.</span></h2>
                </div>
              </div>
              <div className="layer-1-4">
                <div className="about-btn text-center">
                  <div className="genius-btn text-center text-uppercase ul-li-block bold-font">
                    <a href="#">About Us <i className="fas fa-caret-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-area slider-bg-4 relative-position">
            <div className="slider-text">
              <div className="section-title mb20 headline text-center ">
                <span className="subtitle text-uppercase">The Online Learning Management System</span>
                <h2><span>Inventive</span> Solution <br /> for <span>Education</span></h2>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>

    );
  }
}


export default SliderTwo;
