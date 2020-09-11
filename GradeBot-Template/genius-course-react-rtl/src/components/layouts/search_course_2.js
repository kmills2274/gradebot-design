import React from "react";

const NoBg = false;


class SearchCourseTwo extends React.Component {
  render() {
    return (
      <section id="search-course" className={this.props.NoBg === true ? 'search-course-section home-third-course-search backgroud-style' : 'search-course-section home-secound-course-search backgroud-style'}>
        <div className="container">
          <div className="section-title mb20 headline text-center">
            <span className="subtitle text-uppercase">LEARN NEW SKILLS</span>
            <h2><span>Search</span> Genius Courses.</h2>
          </div>
          <div className="search-course mb30 relative-position">
            <form action="#" method="post">
              <input className="course" name="course" type="text" placeholder="Type what do you want to learn today?" />
              <div className="nws-button text-center  gradient-bg text-capitalize">
                <button type="submit" value="Submit">Search Course</button>
              </div>
            </form>
          </div>
          <div className="search-counter-up">
            <div className="row">
              <div className="col-md-3">
                <div className="counter-icon-number">
                  <div className="counter-icon">
                    <i className="text-gradiant flaticon-graduation-hat"></i>
                  </div>
                  <div className="counter-number">
                    <span className="counter-count bold-font">5 </span><span>M+</span>
                    <p>Students Enrolled</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="counter-icon-number">
                  <div className="counter-icon">
                    <i className="text-gradiant flaticon-book"></i>
                  </div>
                  <div className="counter-number">
                    <span className="counter-count bold-font">122</span><span>.500+</span>
                    <p>Online Available Courses</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="counter-icon-number">
                  <div className="counter-icon">
                    <i className="text-gradiant flaticon-favorites-button"></i>
                  </div>
                  <div className="counter-number">
                    <span className="counter-count bold-font">15</span><span>.000+</span>
                    <p>Premium Quality Products</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="counter-icon-number">
                  <div className="counter-icon">
                    <i className="text-gradiant flaticon-group"></i>
                  </div>
                  <div className="counter-number">
                    <span className="counter-count bold-font">7</span><span>.500+</span>
                    <p>Teachers Registered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="search-app">
            <div className="row">
              <div className="col-md-6">
                <div className="app-mock-up">
                  <img src={require("../../assets/img/about/ab-2.png")} alt="" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="about-us-text search-app-content">
                  <div className="section-title relative-position mb20 headline text-left">
                    <h2><span>Download</span> Genius Application on <span>PlayStore.</span></h2>
                  </div>

                  <div className="app-details-content">
                    <p>Introduction Genius Mobile Application on Play Store lorem ipsum dolor sit amet consectuerer adipiscing.</p>

                    <div className="about-list mb30 ul-li-block">
                      <ul>
                        <li>Professional And Experienced Since 1980</li>
                        <li>Our Mission Increasing Global Access To Quality Aducation</li>
                        <li>100K Online Available Courses</li>
                      </ul>
                    </div>
                    <div className="about-btn">
                      <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font float-left">
                        <a href="#">GET THE APP NOW </a>
                      </div>

                      <div className="app-stor ul-li mt10">
                        <ul>
                          <li><a href="#"><i className="fab fa-android"></i></a></li>
                          <li><a href="#"><i className="fab fa-apple"></i></a></li>
                          <li><a href="#"><i className="fab fa-windows"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchCourseTwo;
