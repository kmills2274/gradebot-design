import React from "react";

class Faq extends React.Component {
  componentDidMount() {
    $(".tab-content-1").hide();
    $(".tab-content-1:first").show();

    /* if in tab mode */
    $("ul.product-tab").on("click", "li", function () {

      $(".tab-content-1").hide();
      var activeTab = $(this).attr("rel");
      $("#" + activeTab).fadeIn();

      $("ul.product-tab li").removeClass("active");
      $(this).addClass("active");

      $(".tab_drawer_heading").removeClass("d_active");
      $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").on("click", function () {

      $(".tab-content-1").hide();
      var d_activeTab = $(this).attr("rel");
      $("#" + d_activeTab).fadeIn();

      $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");

      $("ul.product-tab li").removeClass("active");
      $("ul.product-tab li[rel^='" + d_activeTab + "']").addClass("active");
    });


    /* Extra class "tab_last" 
       to add border to right side
       of last tab */
    $('ul.product-tab li').last().addClass("tab_last");
  }
  
  render() {
    return (
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="section-title mb45 headline text-center ">
            <span className="subtitle text-uppercase">GENIUS COURSE FAQ</span>
            <h2>
              Frequently<span> Ask & Questions</span>
            </h2>
          </div>
          <div className="faq-tab">
            <div className="faq-tab-ques ul-li">
              <div className="tab-button text-center mb65 ">
                <ul className="product-tab">
                  <li className="active" rel="tab1">
                    GENERAL
                  </li>
                  <li rel="tab2"> COURSES </li>
                  <li rel="tab3"> TEACHERS </li>
                  <li rel="tab4"> EVENTS</li>
                  <li rel="tab5"> OTHERS</li>
                </ul>
              </div>
              <div className="tab-container">
                <div id="tab1" className="tab-content-1 pt35">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline ">
                        <h3> What is Genius Courses?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                      <div className="ques-ans mb45 headline ">
                        <h3> What Lorem Ipsum Dolor Sit Amet Consectuerer?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline ">
                        <h3> How to Register or Make An Account in Genius?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                      <div className="ques-ans mb45 headline ">
                        <h3> Adipiscing Diamet Nonnumy Nibh Euismod?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab2" className="tab-content-1 pt35">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline ">
                        <h3> What is Genius Courses?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                      <div className="ques-ans mb45 headline ">
                        <h3> What Lorem Ipsum Dolor Sit Amet Consectuerer?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline ">
                        <h3> How to Register or Make An Account in Genius?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                      <div className="ques-ans mb45 headline ">
                        <h3> Adipiscing Diamet Nonnumy Nibh Euismod?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab3" className="tab-content-1 pt35">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> What is Genius Courses?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                      <div className="ques-ans mb45 headline">
                        <h3> What Lorem Ipsum Dolor Sit Amet Consectuerer?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> How to Register or Make An Account in Genius?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                      <div className="ques-ans mb45 headline">
                        <h3> Adipiscing Diamet Nonnumy Nibh Euismod?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab4" className="tab-content-1 pt35">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> What is Genius Courses?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                      <div className="ques-ans mb45 headline">
                        <h3> What Lorem Ipsum Dolor Sit Amet Consectuerer?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> How to Register or Make An Account in Genius?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                      <div className="ques-ans mb45 headline">
                        <h3> Adipiscing Diamet Nonnumy Nibh Euismod?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab5" className="tab-content-1 pt35">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> What is Genius Courses?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                      <div className="ques-ans mb45 headline">
                        <h3> What Lorem Ipsum Dolor Sit Amet Consectuerer?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> How to Register or Make An Account in Genius?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                      <div className="ques-ans mb45 headline">
                        <h3> Adipiscing Diamet Nonnumy Nibh Euismod?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam volutpat. Ut wisi enim ad
                          minim veniam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="view-all-btn bold-font ">
                <a href="#">
                  Make a Question <i className="fas fa-chevron-circle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Faq;
