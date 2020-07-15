import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer text-right">
        {/* has-cards
        <div className="container container-lg">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <div className="card card-lift--hover shadow border-0">
                <a href="./examples/landing.html" title="Landing Page">
                  <img src="./assets/img/theme/landing.jpg" className="card-img" />
                </a>
              </div>
            </div>
            <div className="col-md-6 mb-5 mb-lg-0">
              <div className="card card-lift--hover shadow border-0">
                <a href="./examples/profile.html" title="Profile Page">
                  <img src="./assets/img/theme/profile.jpg" className="card-img" />
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="row row-grid align-items-center my-md">
            <div className="col-lg-6">
              <h3 className="text-primary font-weight-light mb-2">
                از حمایت شما سپاسگذاریم.
              </h3>
              <h6 className="mb-0 font-weight-light">
                خدمات ارایه شده در بازار فیلم دارای مجوز های لازم از مراجع
                مربوطه می باشد و هر گونه بهره برداری و سوء استفاده از محتوای
                بازار فیلم، پیگرد قانونی دارد.
              </h6>
            </div>
            <div className="col-lg-6 text-lg-center btn-wrapper text-center">
              <button
                target="_blank"
                href=""
                rel="nofollow"
                className="btn btn-icon-only btn-twitter rounded-circle"
                data-toggle="tooltip"
                data-original-title="Follow us"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-twitter"></i>
                </span>
              </button>
              <button
                target="_blank"
                href=""
                rel="nofollow"
                className="btn-icon-only rounded-circle btn btn-facebook"
                data-toggle="tooltip"
                data-original-title="Like us"
              >
                <span className="btn-inner--icon">
                  <i className="fab fa-facebook"></i>
                </span>
              </button>
              <button
                target="_blank"
                href=""
                rel="nofollow"
                className="btn btn-icon-only btn-instagram rounded-circle"
                data-toggle="tooltip"
                data-original-title="Follow us"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-instagram"></i>
                </span>
              </button>
              <button
                target="_blank"
                href=""
                rel="nofollow"
                className="btn btn-icon-only btn-github rounded-circle"
                data-toggle="tooltip"
                data-original-title="Star on Github"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-dribbble"></i>
                </span>
              </button>
            </div>
          </div>
          <hr />
          <div className="row align-items-center justify-content-md-between">
            <div className="col-md-6">
              <div className="copyright">
                تمام حقوق برای بازار فیلم محفوظ است
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav nav-footer justify-content-end">
                <li className="nav-item">
                  <a href="" className="nav-link" target="_blank">
                    درباره ما
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link" target="_blank">
                    ارتباط با ما
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link" target="_blank">
                    قوانین
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link" target="_blank">
                    راهنما
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
