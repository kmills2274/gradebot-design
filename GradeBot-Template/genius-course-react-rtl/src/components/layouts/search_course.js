import React from "react";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";


const Style = true;

class SearchCourse extends React.Component {
  
  render() {
    return (
      <section id="search-course" className={this.props.Style !== true ? ('search-course-section') : ('search-course-section search-course-secound')}>
        <div className="container">
          {this.props.Style !== true ? (
            <div>
              <div className="section-title mb20 headline text-center ">
                <span className="subtitle text-uppercase">LEARN NEW SKILLS</span>
                <h2>
                  <span>Search</span> Genius Courses.
              </h2>
              </div>
             
              <div className="search-course mb30 relative-position ">
                <form action="#" method="post">
                  <input
                    className="course"
                    name="course"
                    type="text"
                    placeholder="Type what do you want to learn today?"
                  />
                  <div className="nws-button text-center  gradient-bg text-capitalize">
                    <button type="submit" value="Submit">
                      Search Course
                  </button>
                  </div>
                </form>
              </div>
            </div>
          )
            :
            ''
          }

                
          <div className="search-counter-up">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="counter-icon-number ">
                  <div className="counter-icon">
                    <i className="text-gradiant flaticon-graduation-hat" />
                  </div>
                  <div className="counter-number">
                    <CountUp end={500} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="counter-count bold-font" ref={countUpRef}></span>
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    <span>M+</span>
                    <p>Students Enrolled</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="counter-icon-number ">
                  <div className="counter-icon">
                    <i className="text-gradiant flaticon-book" />
                  </div>
                  <div className="counter-number">
                    <CountUp end={122} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="counter-count bold-font" ref={countUpRef}></span>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span>.500+</span>
                    <p>Online Available Courses</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="counter-icon-number ">
                  <div className="counter-icon">
                    <i className="text-gradiant flaticon-favorites-button" />
                  </div>
                  <div className="counter-number">
                    <CountUp end={15} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="counter-count bold-font" ref={countUpRef}></span>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span>.000+</span>
                    <p>Premium Quality Products</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="counter-icon-number ">
                  <div className="counter-icon">
                    <i className="text-gradiant flaticon-group" />
                  </div>
                  <div className="counter-number">
                    <CountUp end={7} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="counter-count bold-font" ref={countUpRef}></span>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span>.500+</span>
                    <p>Teachers Registered</p>
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

export default SearchCourse;
