import React, { Component } from "react";
import { register } from "./UserFunctions";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    };

    register(user).then((res) => {
      // if (res) {
      this.props.history.push("/login");
      // }
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
                    <small>ثبت نام با گوگل</small>
                  </div>
                  <div className="text-center">
                    <a href="#" className="btn btn-neutral btn-icon">
                      <span className="btn-inner--icon">
                        <img src="../assets/img/icons/common/google.svg" />
                      </span>
                      <span className="btn-inner--text">Google</span>
                    </a>
                  </div>
                </div>
                <div className="card-body px-lg-5 py-lg-5">
                  {/* <div className="text-center text-muted mb-4">
                    <small>Or sign up with credentials</small>
                  </div> */}
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <div className="input-group input-group-alternative mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-hat-3"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="first_name"
                          placeholder="نام"
                          value={this.state.first_name}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-alternative mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-hat-3"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="last_name"
                          placeholder="نام خانوادگی"
                          value={this.state.last_name}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-alternative mb-3">
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
                          placeholder="پسورد"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    {/* <div className="text-muted font-italic"><small>password strength: <span className="text-success font-weight-700">strong</span></small></div>
                    <div className="row my-4">
                      <div className="col-12">
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input className="custom-control-input" id="customCheckRegister" type="checkbox">
                          <label className="custom-control-label" for="customCheckRegister"><span>I agree with the <a href="#">Privacy Policy</a></span></label>
                        </div>
                      </div>
                    </div> */}
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary mt-4">
                        ثبت نام
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
