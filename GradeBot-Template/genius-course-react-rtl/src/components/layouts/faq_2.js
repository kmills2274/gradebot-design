import React from "react";

class FaqTwo extends React.Component {

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
      <section id="faq" className="faq-section faq-secound-home-version backgroud-style">
        <div className="container">
          <div className="section-title mb45 headline text-center">
            <span className="subtitle text-uppercase">GENIUS COURSE FAQ</span>
            <h2>Frequently<span> Ask & Questions</span></h2>
          </div>

          <div className="faq-tab mb45">
            <div className="faq-tab-ques  ul-li">
              <div className="tab-button text-center mb45">
                <ul className="product-tab">
                  <li className="active" rel="tab1">GENERAL </li>
                  <li rel="tab2"> COURSES </li>
                  <li rel="tab3"> TEACHERS </li>
                  <li rel="tab4">  EVENTS  </li>
                  <li rel="tab5">  OTHERS  </li>
                </ul>
              </div>
  
						<div className="tab-container">

							<div id="tab1" className="tab-content-1 pt35">
                  <div id="accordion" className="panel-group">
                    <div className="panel">
                      <div className="panel-title" id="headingOne">
                        <h3 className="mb-0">
                          <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How to Register or Make An Account in Genius?
												</button>
                        </h3>
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="panel-body">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
											</div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-title" id="headingTwo">
                        <h3 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What is Genius Courses?
												</button>
                        </h3>
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="panel-body">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
											</div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-title" id="headingThree">
                        <h3 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What Lorem Ipsum Dolor Sit Amet Consectuerer?
												</button>
                        </h3>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="panel-body">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
											</div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-title" id="headingFoure">
                        <h3 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFoure" aria-expanded="false" aria-controls="collapseFoure">
                            Adipiscing Diamet Nonnumy Nibh Euismod?
												</button>
                        </h3>
                      </div>
                      <div id="collapseFoure" className="collapse" data-parent="#accordion">
                        <div className="panel-body">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
											</div>
                      </div>
                    </div>
                  </div>
  
							</div>
  
							<div id="tab2" className="tab-content-1 pt35">
                  <div id="accordion-2" className="panel-group">
                    <div className="panel">
                      <div className="panel-title" id="headingSix">
                        <h3 className="mb-0">
                          <button className="btn btn-link" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                            How to Register or Make An Account in Genius?
												</button>
                        </h3>
                      </div>
                      <div id="collapseSix" className="collapse show" aria-labelledby="headingSix" data-parent="#accordion-2">
                        <div className="panel-body">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
											</div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-title" id="headingSeven">
                        <h3 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            What is Genius Courses?
												</button>
                        </h3>
                      </div>
                      <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion-2">
                        <div className="panel-body">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
											</div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-title" id="headingEight">
                        <h3 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            What Lorem Ipsum Dolor Sit Amet Consectuerer?
												</button>
                        </h3>
                      </div>
                      <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion-2">
                        <div className="panel-body">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
											</div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-title" id="headingNine">
                        <h3 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            Adipiscing Diamet Nonnumy Nibh Euismod?
												</button>
                        </h3>
                      </div>
                      <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordion-2">
                        <div className="panel-body">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy.
											</div>
                      </div>
                    </div>
                  </div>
							</div>
  
							<div id="tab3" className="tab-content-1 pt35">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> What is Genius Courses?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>

                      <div className="ques-ans mb45 headline">
                        <h3> What Lorem Ipsum Dolor Sit Amet Consectuerer?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> How to Register or Make An Account in Genius?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>

                      <div className="ques-ans mb45 headline">
                        <h3> Adipiscing Diamet Nonnumy Nibh Euismod?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>
                    </div>
                  </div>
                </div>
  
							<div id="tab4" className="tab-content-1 pt35">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> What is Genius Courses?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>

                      <div className="ques-ans mb45 headline">
                        <h3> What Lorem Ipsum Dolor Sit Amet Consectuerer?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> How to Register or Make An Account in Genius?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>

                      <div className="ques-ans mb45 headline">
                        <h3> Adipiscing Diamet Nonnumy Nibh Euismod?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>
                    </div>
                  </div>
                </div>
  
							<div id="tab5" className="tab-content-1 pt35">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> What is Genius Courses?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>

                      <div className="ques-ans mb45 headline">
                        <h3> What Lorem Ipsum Dolor Sit Amet Consectuerer?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> How to Register or Make An Account in Genius?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>

                      <div className="ques-ans mb45 headline">
                        <h3> Adipiscing Diamet Nonnumy Nibh Euismod?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>
                    </div>
                  </div>
                </div>
						</div>
            </div>
          </div>

          <div className="about-btn text-center">
            <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
              <a href="#">Make Question <i className="fas fa-caret-right"></i></a>
            </div>
            <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
              <a href="#">contact us <i className="fas fa-caret-right"></i></a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FaqTwo;
