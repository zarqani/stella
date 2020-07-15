import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import Dashboard from "./Dashboard";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
    });
  }

  render() {
    return (
      <Dashboard>
        <div className="row justify-content-center">
          <div className="col-lg-2 order-lg-2 mt-5">
            <div className="card-profile-image">
              <a href="javascript:;">
                <img
                  src="../assets/img/faces/avatar.jpg"
                  className="rounded-circle"
                  style={{ width: "100%" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <h3>{`${this.state.first_name} ${this.state.last_name}`}</h3>
        </div>
        <div className="mt-5 py-5 border-top text-center">
          <table className="table col-sm-6 mx-auto">
            <tr>
              <th>نام</th>
              <td>{this.state.first_name}</td>
            </tr>
            <tr>
              <th>نام خانوادگی</th>
              <td>{this.state.last_name}</td>
            </tr>
            <tr>
              <th>ایمیل</th>
              <td>{this.state.email}</td>
            </tr>
          </table>
        </div>
      </Dashboard>
    );
  }
}

export default Profile;
