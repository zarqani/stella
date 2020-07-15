import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../Header";
import { getPackageList } from "../../api/PackageList";

class PakageList extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const data = await getPackageList();

    this.setState({
      data,
    });
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <div className="header-sm">
          <Header title="خرید اشتراک" />
        </div>
        <div className="container py-5 text-right">
          <div className="row">
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <div className="col-sm-4">
                  <div className="PakageList-item border-primary">
                    {/* <div className="PakageList-discount">25%</div> */}
                    <h6 className="PakageList-title">{item.title}</h6>
                    <div className="PakageList-content my-3">
                      {item.description}
                      <div className="PakageList-price text-primary mt-2">
                        <strong>{item.price} تومان</strong>
                      </div>
                    </div>
                    <Link
                      className="btn btn-primary btn-block mt-5"
                      to={`/factor/pId=${item.id}`}
                    >
                      انتخاب و ادامه
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(PakageList);
