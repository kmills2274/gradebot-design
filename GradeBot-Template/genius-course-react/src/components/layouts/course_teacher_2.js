import React from "react";

import OwlCarousel from 'react-owl-carousel';



const options = {
  margin: 25,
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
      nav: false,
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,

    }
  }
};

class CourseTeacherTwo extends React.Component {
  render() {
    return (
      <section id="teacher-2" className="secound-teacher-section">
        <div className="container">
          <div className="section-title mb35 headline text-left">
            <span className="subtitle ml42  text-uppercase">GENIUS STAFFS</span>
            <h2>Genius <span>Teachers.</span></h2>
          </div>
          <OwlCarousel className="teacher-secound-slide owl-carousel"
            {...options}
          >
            <div className="teacher-img-text relative-position text-center">
              <div className="teacher-img-social relative-position">
                <img src={require("../../assets/img/teacher/tb-1.png")} alt="" />
                <div className="blakish-overlay"></div>
                <div className="teacher-social-list ul-li">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="teacher-name-designation mt15">
                <span className="teacher-name">Daniel Alvares</span>
                <span className="teacher-designation">Mobile Apps</span>
              </div>
            </div>

            <div className="teacher-img-text relative-position text-center">
              <div className="teacher-img-social relative-position">
                <img src={require("../../assets/img/teacher/tb-2.png")} alt="" />
                <div className="blakish-overlay"></div>
                <div className="teacher-social-list ul-li">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="teacher-name-designation mt15">
                <span className="teacher-name">Daniel Alvares</span>
                <span className="teacher-designation">Mobile Apps</span>
              </div>
            </div>

            <div className="teacher-img-text relative-position text-center">
              <div className="teacher-img-social relative-position">
                <img src={require("../../assets/img/teacher/tb-3.png")} alt="" />
                <div className="blakish-overlay"></div>
                <div className="teacher-social-list ul-li">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="teacher-name-designation mt15">
                <span className="teacher-name">Juliana Hernandes</span>
                <span className="teacher-designation">Web Design</span>
              </div>
            </div>

            <div className="teacher-img-text relative-position text-center">
              <div className="teacher-img-social relative-position">
                <img src={require("../../assets/img/teacher/tb-4.png")} alt="" />
                <div className="blakish-overlay"></div>
                <div className="teacher-social-list ul-li">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="teacher-name-designation mt15">
                <span className="teacher-name">Daniel Alvares</span>
                <span className="teacher-designation">Mobile Apps</span>
              </div>
            </div>

            <div className="teacher-img-text relative-position text-center">
              <div className="teacher-img-social relative-position">
                <img src={require("../../assets/img/teacher/tb-1.png")} alt="" />
                <div className="blakish-overlay"></div>
                <div className="teacher-social-list ul-li">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="teacher-name-designation mt15">
                <span className="teacher-name">Berliana Luis</span>
                <span className="teacher-designation">IOS App</span>
              </div>
            </div>

            <div className="teacher-img-text relative-position text-center">
              <div className="teacher-img-social relative-position">
                <img src={require("../../assets/img/teacher/tb-3.png")} alt="" />
                <div className="blakish-overlay"></div>
                <div className="teacher-social-list ul-li">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="teacher-name-designation mt15">
                <span className="teacher-name">Johansen Doe</span>
                <span className="teacher-designation">Mobile Apps</span>
              </div>
            </div>

            <div className="teacher-img-text relative-position text-center">
              <div className="teacher-img-social relative-position">
                <img src={require("../../assets/img/teacher/tb-1.png")} alt="" />
                <div className="blakish-overlay"></div>
                <div className="teacher-social-list ul-li">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="teacher-name-designation mt15">
                <span className="teacher-name">Johanas Doe</span>
                <span className="teacher-designation">Graphic</span>
              </div>
            </div>

            <div className="teacher-img-text relative-position text-center">
              <div className="teacher-img-social relative-position">
                <img src={require("../../assets/img/teacher/tb-4.png")} alt="" />
                <div className="blakish-overlay"></div>
                <div className="teacher-social-list ul-li">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="teacher-name-designation mt15">
                <span className="teacher-name">Daniel Alvares</span>
                <span className="teacher-designation">Mobile Apps</span>
              </div>
            </div>

            <div className="teacher-img-text relative-position text-center">
              <div className="teacher-img-social relative-position">
                <img src={require("../../assets/img/teacher/tb-1.png")} alt="" />
                <div className="blakish-overlay"></div>
                <div className="teacher-social-list ul-li">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="teacher-name-designation mt15">
                <span className="teacher-name">Daniel Alvares</span>
                <span className="teacher-designation">Mobile Apps</span>
              </div>
            </div>
          </OwlCarousel>

          <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
            <a href="#">All teacher <i className="fas fa-caret-right"></i></a>
          </div>
        </div>
      </section>
    );
  }
}

export default CourseTeacherTwo;
