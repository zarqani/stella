import React, { Component } from "react";
import Slider from "react-slick";

class Landing extends Component {
  render() {
    var sliderSettings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      rtl: true,
    };

    return (
      <div className="wrapper">
        <div className="section section-hero section-shaped">
          <div
            className="shape shape-style-1 shape-style-img shape-primary"
            style={{ backgroundImage: "url(../assets/img/film/4.jpg)" }}
          >
            <span className="span-150"></span>
            <span className="span-50"></span>
            <span className="span-50"></span>
            <span className="span-75"></span>
            <span className="span-100"></span>
            <span className="span-75"></span>
            <span className="span-50"></span>
            <span className="span-100"></span>
            <span className="span-50"></span>
            <span className="span-100"></span>
          </div>
          <div className="page-header">
            <div className="container shape-container d-flex align-items-center py-xl">
              <div className="col px-0">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6 text-center">
                    <h1 className=" text-white">مشاهده آنلاین فیلم</h1>
                    <p className="lead text-white">
                      دسترسی به دنیایی از فیلم و سریال‌های جذاب
                    </p>
                    <div className="btn-wrapper mt-5">
                      <a className="btn btn-lg btn-white btn-icon mb-3 mb-sm-0">
                        <span className="btn-inner--icon ml-2">
                          <i className="ni ni-cloud-download-95"></i>
                        </span>
                        <span className="btn-inner--text">خرید اشتراک</span>
                      </a>
                      {/* <a
                        href="https://github.com/creativetimofficial/argon-design-system"
                        className="btn btn-lg btn-github btn-icon mb-3 mb-sm-0"
                        target="_blank"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-github"></i>
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning">Star us</span> on
                          Github
                        </span>
                      </a> */}
                    </div>
                    {/* <div className="mt-5">
                      <small className="font-weight-bold mb-0 mr-2 text-white">
                        *proudly coded by
                      </small>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              x="0"
              y="0"
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <div
          className="section"
          style={{ backgroundImage: "url('./assets/img/ill/1.svg')" }}
        >
          <div className="container py-md">
            <h4 className="text-center mb-4 h5 text-primary">
              پرطرفدارترین ها
            </h4>
            <div className="text-center">
              <Slider {...sliderSettings}>
                <div className="p-3">
                  <img
                    src="../assets/img/film/1.jpg"
                    alt="Rounded image"
                    className="img-fluid rounded shadow m-auto"
                  />
                  <span className="d-block text-uppercase font-weight-bold mt-2 text-center">
                    فیلم1
                  </span>
                </div>
                <div className="p-3">
                  <img
                    src="../assets/img/film/2.jpg"
                    alt="Circle image"
                    className="img-fluid rounded shadow m-auto"
                  />
                  <span className="d-block text-uppercase font-weight-bold mt-2 text-center">
                    فیلم1
                  </span>
                </div>
                <div className="p-3">
                  <img
                    src="../assets/img/film/3.jpg"
                    alt="Raised image"
                    className="img-fluid rounded shadow m-auto"
                  />
                  <span className="d-block text-uppercase font-weight-bold mt-2 text-center">
                    فیلم1
                  </span>
                </div>
                <div className="p-3">
                  <img
                    src="../assets/img/film/4.jpg"
                    alt="Raised circle image"
                    className="img-fluid rounded shadow m-auto"
                  />
                  <span className="d-block text-uppercase font-weight-bold mt-2 text-center">
                    فیلم1
                  </span>
                </div>
                <div className="p-3">
                  <img
                    src="../assets/img/film/5.jpg"
                    alt="Raised circle image"
                    className="img-fluid rounded shadow m-auto"
                  />
                  <span className="d-block text-uppercase font-weight-bold mt-2 text-center">
                    فیلم1
                  </span>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
