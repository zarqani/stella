import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import Dashboard from "../Dashboard";
import PackageListForm from "./PackageListForm";
import {
  getPackageList,
  postPackageList,
  getPackage,
  putPackage,
  deletePackage,
} from "../../../api/PackageList";

class PackageList extends Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      edite: false,
      data: [],
      elementId: 0,
      initialValues: null,
    };
  }

  componentDidMount = async () => {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);

    if (!token || decoded.role !== "admin") {
      this.props.history.push("/");
    }

    getPackageList().then((data) => {
      this.setState({
        data,
      });
    });
  };

  handelChange = () => {
    this.setState((prevState) => {
      return {
        edite: !prevState.edite,
      };
    });
  };

  removeHandelClick = (id) => {
    deletePackage(id).then((res) => {
      if (res) {
        const elements = this.state.data;
        const index =
          elements && elements.length > 0
            ? elements.findIndex((item) => Number(item.id, 10) === id)
            : -1;
        if (index > -1) {
          elements.splice(index, 1);
          this.setState({
            data: elements,
            elementId: 0,
          });
        }
      }
    });
  };

  setElemwntId = async (id) => {
    this.setState({
      elementId: id,
    });
  };

  editHandelClick = async (id) => {
    const data = await getPackage(id);
    this.setState({
      elementId: id,
      edite: true,
      initialValues: data,
    });
  };

  onSubmit = (data) => {
    const { elementId } = this.state;
    if (!elementId) {
      postPackageList(data).then((res) => {
        this.setState((prevState) => {
          return {
            data: [...prevState.data, res],
            edite: false,
          };
        });
      });
    } else {
      putPackage(elementId, data).then((res) => {
        if (res) {
          const elements = this.state.data;
          const index =
            elements && elements.length > 0
              ? elements.findIndex((item) => Number(item.id, 10) === res.id)
              : -1;
          if (index > -1) {
            elements[index] = data;
            this.setState({
              data: elements,
              edite: false,
              elementId: 0,
              initialValues: null,
            });
          }
        }
      });
    }
  };

  render() {
    const { edite, data, initialValues } = this.state;

    return (
      <Dashboard>
        {edite ? (
          <div className="bg-secondary p-4">
            <div className="row mb-3">
              <div className="col">
                <h5 className="text-right mb-4">افزودن اشتراک جدید</h5>
              </div>
              <div className="col">
                <div className="text-left">
                  <button
                    onClick={this.handelChange}
                    type="button"
                    className="btn btn-primary"
                  >
                    برگشت به لیست
                  </button>
                </div>
              </div>
            </div>
            <PackageListForm
              onSubmitForm={this.onSubmit}
              initialValues={initialValues}
            />
          </div>
        ) : (
          <>
            <div className="row mb-3">
              <div className="col">
                <h5 className="text-right mb-4">لیست اشتراکها</h5>
              </div>
              <div className="col">
                <div className="text-left">
                  <button
                    onClick={this.handelChange}
                    type="button"
                    className="btn btn-primary"
                  >
                    افزودن اشتراک جدید
                  </button>
                </div>
              </div>
            </div>
            <table className="table table-striped mx-auto text-right">
              <thead>
                <tr>
                  <th className="text-primary" scope="col">
                    عنوان
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
                      <th>{item.title}</th>
                      <td className="text-center">{item.date}</td>
                      <td className="text-center">{item.price}</td>
                      <td className="text-left">
                        <button
                          onClick={() => this.editHandelClick(item.id)}
                          type="button"
                          className="btn btn-sm btn-default ml-2"
                        >
                          <span className="btn-inner--icon">
                            <i className="fa fa-pencil"></i>
                          </span>
                        </button>
                        <button
                          data-toggle="modal"
                          data-target="#exampleModal"
                          type="button"
                          className="btn btn-sm btn-danger"
                          onClick={() => this.setElemwntId(item.id)}
                        >
                          <span className="btn-inner--icon">
                            <i className="fa fa-trash"></i>
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        )}
        <div
          className="modal fade show"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modal-form"
          aria-modal="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-sm"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className="card bg-secondary shadow border-0 mb-0">
                  <div className="card-body text-right p-4">
                    آیا مطمئن هستید میخواهید این آیتم را حذف کنید؟
                    <div className="text-left mt-5">
                      <button
                        type="button"
                        className="btn btn-secondary ml-2"
                        data-dismiss="modal"
                      >
                        لغو
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() =>
                          this.removeHandelClick(this.state.elementId)
                        }
                        data-dismiss="modal"
                      >
                        تایید
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default PackageList;
