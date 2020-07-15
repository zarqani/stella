import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Dashboard from "../Dashboard";
import { getFactors } from "../../../api/Factor";

class Factor extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);

    if (!token || decoded.role !== "admin") {
      this.props.history.push("/");
    }

    getFactors().then((data) => {
      this.setState({
        data,
      });
    });
  };

  render() {
    const { data } = this.state;

    console.log(data, "data");

    return (
      <Dashboard>
        <h5 className="text-right mb-4">لیست پرداختها</h5>
        <table className="table table-striped mx-auto text-right">
          <thead>
            <tr>
              <th className="text-primary" scope="col">
                شناسه کاربر
              </th>
              <th className="text-primary text-center" scope="col">
                مهلت
              </th>
              <th className="text-primary text-center" scope="col">
                قیمت
              </th>
              <th className="text-primary text-left" scope="col">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <tr>
                  <th>{item.userId}</th>
                  <td className="text-center">{item.subscriptionExpired}</td>
                  <td className="text-center">{item.price}</td>
                  <td className="text-left">
                    <Link
                      className="btn btn-sm btn-default ml-2"
                      to={`/factor/id=${item.id}`}
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-link"></i>
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Dashboard>
    );
  }
}

export default withRouter(Factor);
