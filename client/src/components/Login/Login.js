import React, { Component } from "react";
import { login } from "../UserFunctions";
import LoginForm from "./LoginForm";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (data) => {
    // e.preventDefault();

    // const user = {
    //   email: this.state.email,
    //   password: this.state.password,
    // };

    console.log(data, "data");

    login(data).then((res) => {
      if (res) {
        this.props.history.push("/dashboard/profile");
      }
    });
  };

  render() {
    return (
      <section className="section section-shaped section-lg">
        <div className="shape shape-style-1 bg-gradient-default">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="container pt-lg-7">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card bg-secondary shadow border-0">
                <div className="card-header bg-white pb-5">
                  <div className="text-muted text-center mb-3">
                    <small>با گوگل وارد شوید</small>
                  </div>
                  <div className="btn-wrapper text-center">
                    <a href="#" className="btn btn-neutral btn-icon">
                      <span className="btn-inner--icon">
                        <img src="../assets/img/icons/common/google.svg" />
                      </span>
                      <span className="btn-inner--text">Google</span>
                    </a>
                  </div>
                </div>
                <div className="card-body px-lg-5 py-lg-5">
                  <LoginForm onSubmitForm={this.onSubmit} />
                  {/* <div className="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                  </div> */}
                  {/* <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group mb-3">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-email-83"></i>
                          </span>
                        </div>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          //   aria-describedby="emailHelp"
                          placeholder="ایمیل"
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="form-group focused">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-lock-circle-open"></i>
                          </span>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="رمز عبور"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    {/* <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        for=" customCheckLogin"
                      >
                        <span>Remember me</span>
                      </label>
                    </div> 
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary my-4">
                        ورود
                      </button>
                    </div>
                  </form> */}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <a href="#" className="text-light">
                    <small>فراموشی رمز عبور</small>
                  </a>
                </div>
                <div className="col-6 text-right">
                  <a href="#" className="text-light">
                    <small>ایجاد حساب کاربری</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
