import React from "react";
import OwlCarousel from 'react-owl-carousel';


const productBG = "";

const options = {
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

class BestProduct extends React.Component {
  render() {
    return (
      <section id="best-product" className={this.props.productBG === true ? ('best-product-section best-product-4') : ('best-product-section')}>
        <div className="container">
          <div className="section-title-2 mb65 headline text-left ">
            <h2>
              Genius <span>Best Products.</span>
            </h2>
          </div>
          <OwlCarousel id="best-product-slide-item" className="best-product-slide owl-carousel"
            margin={25}
            items={4}
            nav
            dots={false}
            smartSpeed={1000}
            navText={["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]}
            {...options}
          >
            <div className="product-img-text ">
              <div className="product-img text-center mb20">
                <img src={require("../../assets/img/product/bp-1.png")} alt="" />
              </div>
              <div className="product-text-content relative-position">
                <div className="best-title-price float-left">
                  <div className="course-title headline">
                    <h3>
                      <a href="#">Mobile Apps Books.</a>
                    </h3>
                  </div>
                  <div className="price-start">
                    Start from
                    <span>$55.25</span>
                  </div>
                </div>
                <div className="add-cart text-center">
                  <i className="fas fa-cart-plus" />
                </div>
              </div>
            </div>
            <div className="product-img-text ">
              <div className="product-img text-center mb20">
                <img src={require("../../assets/img/product/bp-2.png")} alt="" />
              </div>
              <div className="product-text-content relative-position">
                <div className="best-title-price float-left">
                  <div className="course-title headline">
                    <h3>
                      <a href="#">Mobile Apps Books.</a>
                    </h3>
                  </div>
                  <div className="price-start">
                    Start from
                    <span>$55.25</span>
                  </div>
                </div>
                <div className="add-cart text-center">
                  <i className="fas fa-cart-plus" />
                </div>
              </div>
            </div>
            <div className="product-img-text ">
              <div className="product-img text-center mb20">
                <img src={require("../../assets/img/product/bp-3.png")} alt="" />
              </div>
              <div className="product-text-content relative-position">
                <div className="best-title-price float-left">
                  <div className="course-title headline">
                    <h3>
                      <a href="#">Mobile Apps Books.</a>
                    </h3>
                  </div>
                  <div className="price-start">
                    Start from
                    <span>$55.25</span>
                  </div>
                </div>
                <div className="add-cart text-center">
                  <i className="fas fa-cart-plus" />
                </div>
              </div>
            </div>
            <div className="product-img-text ">
              <div className="product-img text-center mb20">
                <img src={require("../../assets/img/product/bp-4.png")} alt="" />
              </div>
              <div className="product-text-content relative-position">
                <div className="best-title-price float-left">
                  <div className="course-title headline">
                    <h3>
                      <a href="#">Mobile Apps Books.</a>
                    </h3>
                  </div>
                  <div className="price-start">
                    Start from
                    <span>$55.25</span>
                  </div>
                </div>
                <div className="add-cart text-center">
                  <i className="fas fa-cart-plus" />
                </div>
              </div>
            </div>
            <div className="product-img-text ">
              <div className="product-img text-center mb20">
                <img src={require("../../assets/img/product/bp-1.png")} alt="" />
              </div>
              <div className="product-text-content relative-position">
                <div className="best-title-price float-left">
                  <div className="course-title headline">
                    <h3>
                      <a href="#">Mobile Apps Books.</a>
                    </h3>
                  </div>
                  <div className="price-start">
                    Start from
                    <span>$55.25</span>
                  </div>
                </div>
                <div className="add-cart text-center">
                  <i className="fas fa-cart-plus" />
                </div>
              </div>
            </div>
            <div className="product-img-text">
              <div className="product-img text-center mb20">
                <img src={require("../../assets/img/product/bp-2.png")} alt="" />
              </div>
              <div className="product-text-content relative-position">
                <div className="best-title-price float-left">
                  <div className="course-title headline">
                    <h3>
                      <a href="#">Mobile Apps Books.</a>
                    </h3>
                  </div>
                  <div className="price-start">
                    Start from
                    <span>$55.25</span>
                  </div>
                </div>
                <div className="add-cart text-center">
                  <i className="fas fa-cart-plus" />
                </div>
              </div>
            </div>
            <div className="product-img-text">
              <div className="product-img text-center mb20">
                <img src={require("../../assets/img/product/bp-3.png")} alt="" />
              </div>
              <div className="product-text-content relative-position">
                <div className="best-title-price float-left">
                  <div className="course-title headline">
                    <h3>
                      <a href="#">Mobile Apps Books.</a>
                    </h3>
                  </div>
                  <div className="price-start">
                    Start from
                    <span>$55.25</span>
                  </div>
                </div>
                <div className="add-cart text-center">
                  <i className="fas fa-cart-plus" />
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    );
  }
}

export default BestProduct;
