import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      userRole: "",
    };
  }

  componentDidMount = async () => {
    const token = localStorage.usertoken;
    if (token) {
      const decoded = jwt_decode(token);
      console.log(decoded, "decoded");

      this.setState({
        userRole: decoded.role,
      });
    }
  };
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push("/");
  }

  render() {
    const { userRole } = this.state;

    const LoginRegLink = (
      <ul className="navbar-nav align-items-lg-center mr-lg-auto">
        <li className="nav-item">
          <Link className="btn btn-outline-neutral btn-icon" to="/pakageList">
            <span className="btn-inner--icon ml-2">
              <i className="fa fa-cart-plus"></i>
            </span>
            <span className="nav-link-inner--text">خرید اشتراک </span>
          </Link>
        </li>
        <li className="nav-item">
          <div className="btn btn-neutral btn-icon">
            <Link to="/login">
              <span className="btn-inner--icon ml-2">
                <i className="fa fa-sign-in"></i>
              </span>
              <span className="nav-link-inner--text">ورود / </span>
            </Link>
            <Link to="/register">
              <span className="nav-link-inner--text">ثبت نام </span>
            </Link>
          </div>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav align-items-lg-center mr-lg-auto">
        <li className="nav-item">
          <Link className="btn btn-outline-neutral btn-icon" to="/pakageList">
            <span className="btn-inner--icon ml-2">
              <i className="fa fa-cart-plus"></i>
            </span>
            <span className="nav-link-inner--text">خرید اشتراک </span>
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="btn btn-neutral btn-icon"
            href=""
            onClick={this.logOut.bind(this)}
          >
            <span className="btn-inner--icon  ml-2">
              <i className="fa fa-sign-out"></i>
            </span>
            <span className="nav-link-inner--text">خروج</span>
          </a>
        </li>
      </ul>
    );

    return (
      <nav
        id="navbar-main"
        className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom"
      >
        <div className="container">
          {/* <a className="navbar-brand mr-lg-5" href="../index.html">
            <img src="../assets/img/brand/white.png" />
            بازار فیلم
          </a> */}
          <Link className="navbar-brand" to="/">
            بازار فیلم
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar_global"
            aria-controls="navbar_global"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbar_global">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  {/* <a href="../../../index.html">
                    <img src="../assets/img/brand/blue.png" />
                    بازار فیلم
                  </a> */}
                  <Link className="nav-link" to="/">
                    بازار فیلم
                  </Link>
                </div>
                <div className="col-6 collapse-close">
                  <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbar_global"
                    aria-controls="navbar_global"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
              <li className="nav-item">
                <Link className="nav-link" to="/films">
                  فیلم ها
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/films/category=1">
                  ایرانی
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/films/category=2">
                  خارجی
                </Link>
              </li>
              {localStorage.usertoken && (
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                  >
                    <i className="ni ni-collection d-lg-none"></i>
                    <span className="nav-link-inner--text">داشبورد</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link
                      className="dropdown-item text-right"
                      to="/dashboard/profile"
                    >
                      پروفایل
                    </Link>

                    {/* {userRole === "admin" ? ( */}
                    <>
                      <Link
                        className="dropdown-item text-right"
                        to="/dashboard/packageList"
                      >
                        مدیریت اشتراک ها
                      </Link>
                      <Link
                        className="dropdown-item text-right"
                        to="/dashboard/factor"
                      >
                        مدیریت پرداخت ها
                      </Link>
                      <Link
                        className="dropdown-item text-right"
                        to="/dashboard/films"
                      >
                        مدیریت فیلم ها
                      </Link>
                      <Link
                        className="dropdown-item text-right"
                        to="/dashboard/filmpeople"
                      >
                        مدیریت عوامل فیلم ها
                      </Link>
                      <Link
                        className="dropdown-item text-right"
                        to="/dashboard/category"
                      >
                        مدیریت دسته ها
                      </Link>
                    </>
                    {/* ) : (
                      <Link
                        className="dropdown-item text-right"
                        to="/dashboard/factor"
                      >
                        پرداخت ها
                      </Link>
                    )} */}
                  </div>
                </li>
              )}
            </ul>

            {localStorage.usertoken ? userLink : LoginRegLink}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
