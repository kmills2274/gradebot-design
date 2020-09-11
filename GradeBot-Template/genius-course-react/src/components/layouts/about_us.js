import React from "react";

const WhiteBg = true;

class AboutUs extends React.Component {
  render() {
    return (
      <section id="about-us" className={this.props.WhiteBg === true ? 'about-us-section home-secound home-third' : 'about-us-section'}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="about-resigter-form backgroud-style relative-position">
                <div className="register-content">
                  <div className="register-fomr-title text-center">
                    <h3 className="bold-font">
                      <span>Get a</span> Free Registration.
                    </h3>
                    <p>More Than 122K Online Available Courses</p>
                  </div>
                  <div className="register-form-area">
                    <form
                      className="contact_form"
                      action="#"
                      method="POST"
                      encType="multipart/form-data"
                    >
                      <div className="contact-info">
                        <input
                          className="name"
                          name="name"
                          type="text"
                          placeholder="Your Name."
                        />
                      </div>
                      <div className="contact-info">
                        <input
                          className="nbm"
                          name="nbm"
                          type="number"
                          placeholder="Your Number"
                        />
                      </div>
                      <div className="contact-info">
                        <input
                          className="email"
                          name="email"
                          type="email"
                          placeholder="Email Address."
                        />
                      </div>
                      <select>
                        <option value={9}>
                          Select Course.
                        </option>
                        <option value={10}>Web Design</option>
                        <option value={11}>Web Development</option>
                        <option value={12}>Php Core</option>
                      </select>
                      <div className="contact-info">
                        <input
                          type="text"
                          id="datepicker"
                          placeholder="Date."
                        />
                      </div>
                      <textarea placeholder="Message." defaultValue={""} />
                      <div className="nws-button text-uppercase text-center white text-capitalize">
                        <button type="submit" value="Submit">
                          SUBMIT REQUEST{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-mockup">
                <img src={require('../../assets/img/about/phone.png')} alt="" />
              </div>
            </div>
            {}
            <div className="col-md-7">
              <div className="about-us-text">
                <div className="section-title relative-position mb20 headline text-left ">
                  <span className="subtitle ml42 text-uppercase">
                    SORT ABOUT US
                  </span>
                  <h2>
                    We are <span>Genius Course</span>
                    work since 1980.
                  </h2>
                  <p>
                    We take our mission of increasing global access to quality
                    education seriously. We connect learners to the best
                    universities and institutions from around the world.
                  </p>
                </div>
                <div className="about-content-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam volutpat. Ut wisi enim ad minim veniam. magna
                    aliquam volutpat. Ut wisi enim ad minim veniam.
                  </p>
                  <div className="about-list mb65 ul-li-block ">
                    <ul>
                      <li>Professional And Experienced Since 1980</li>
                      <li>
                        We Connect Learners To The Best Universities From Around
                        The World
                      </li>
                      <li>
                        Our Mission Increasing Global Access To Quality
                        Aducation
                      </li>
                      <li>100K Online Available Courses</li>
                    </ul>
                  </div>
                  <div className="about-btn ">
                    <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                      <a href="#">
                        About Us <i className="fas fa-caret-right" />
                      </a>
                    </div>
                    <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                      <a href="#">
                        contact us <i className="fas fa-caret-right" />
                      </a>
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

export default AboutUs;
