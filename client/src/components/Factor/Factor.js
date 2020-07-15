import React, { Component } from "react";
import Header from "../Header";
import { getFactor, postFactors } from "../../api/Factor";
import { getPackage } from "../../api/PackageList";
import jwt_decode from "jwt-decode";
import moment from "moment";

class Factor extends Component {
  constructor() {
    super();

    this.state = {
      data: {},
      status: "",
    };
  }

  componentDidMount = async () => {
    // moment.local("fa");
    // const data = await getPackage(id);
    console.log(moment().format("YYYY/MM/DD"), "moment");

    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);

    if (!token) {
      this.props.history.push("/");
    }

    if (this.props.match && this.props.match.params) {
      const data = {
        title: "",
        start: "",
        end: "",
        price: 0,
        subscriptionId: 0,
        userId: decoded.id,
      };

      if (this.props.match.params.pId) {
        const dataP = await getPackage(Number(this.props.match.params.pId));
        data.title = dataP.title;
        data.start = moment().format("YYYY/MM/DD");
        data.end = moment()
          .add(dataP.date, dataP.dateType)
          .format("YYYY/MM/DD");
        data.price = dataP.price;
        data.subscriptionId = Number(this.props.match.params.pId);
      } else if (this.props.match.params.id) {
        const dataF = await getFactor(Number(this.props.match.params.id));
        const dataS = await getPackage(Number(dataF.subscriptionId));
        data.title = dataS.title;
        data.start = moment(dataF.created).format("YYYY/MM/DD");
        data.end = moment(dataF.subscriptionExpired).format("YYYY/MM/DD");
        data.price = dataF.price;

        this.setState({
          status: dataF.status,
        });
      }

      this.setState({
        data,
      });
    }
  };

  handelPayment = () => {
    const { data } = this.state;
    postFactors({
      status: "success",
      price: data.price,
      subscriptionId: data.subscriptionId,
      subscriptionExpired: data.end,
      userId: data.userId,
    }).then((res) => {
      console.log(res, "ressssssssssssddddddd");
      this.props.history.push(`id=${res.id}`);
    });
  };

  render() {
    const { data, status } = this.state;
    // console.log(this.props.location.match.params.pId, "location.params.id");
    // console.log(
    //   this.props.match &&
    //     this.props.match.params &&
    //     this.props.match.params.pId,
    //   "this.props"
    // );

    console.log(status, "status");

    return (
      <>
        <div className="header-sm">
          <Header title="فاکتور خرید" />
        </div>
        <div className="container py-5 text-right">
          <div className="row mb-3">
            <div className="col">
              <span className="text-right mb-4">
                وضعیت:{" "}
                {status !== "success" ? (
                  <span className="text-primary">پرداخت نشده</span>
                ) : (
                  <span className="text-success">پرداخت شده</span>
                )}
              </span>
            </div>
            {status !== "success" && (
              <div className="col">
                <div className="text-left">
                  <button
                    // onClick={this.handelChange}
                    type="button"
                    className="btn btn-default"
                  >
                    بازگشت
                  </button>
                </div>
              </div>
            )}
          </div>
          <table className="table table-striped mx-auto text-right">
            <thead>
              <tr>
                <th className="text-primary" scope="col">
                  عنوان
                </th>
                <th className="text-primary text-center" scope="col">
                  تاریخ شروع
                </th>
                <th className="text-primary text-center" scope="col">
                  تاریخ پایان
                </th>
                <th className="text-primary text-left" scope="col">
                  مبلغ قابل پرداخت
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{data.title}</th>
                <td className="text-center">{data.start}</td>
                <td className="text-center">{data.end}</td>
                <td className="text-left">{data.price} تومان</td>
              </tr>
              <tr>
                <td colSpan="4">
                  توضیحات:%9 مالیات بر ارزش افزوده در مبلغ فوق لحاظ شده است
                </td>
              </tr>
              <tr className="bg-primary text-white">
                {status !== "success" ? (
                  <td colSpan="3">مبلغ قابل پرداخت</td>
                ) : (
                  <td colSpan="3">مبلغ پرداخت شده</td>
                )}
                <td className="text-left">{data.price} تومان</td>
              </tr>
            </tbody>
          </table>
          <div className="row mt-3">
            <div className="col">
              {/* <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    Button
                  </button>
                </div>
              </div> */}
            </div>
            {status !== "success" && (
              <div className="col">
                <div className="text-left">
                  <button
                    onClick={this.handelPayment}
                    type="button"
                    className="btn btn-primary"
                  >
                    پرداخت
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Factor;
