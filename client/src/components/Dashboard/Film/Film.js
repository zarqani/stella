import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import Dashboard from "../Dashboard";
import FilmForm from "./FilmForm";
import {
  getFilms,
  postFilm,
  getFilm,
  putFilm,
  deleteFilm,
} from "../../../api/Film";

class Film extends Component {
  constructor() {
    super();

    this.state = {
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

    getFilms().then((data) => {
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
    deleteFilm(id).then((res) => {
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

  setElementId = async (id) => {
    this.setState({
      elementId: id,
    });
  };

  editHandelClick = async (id) => {
    console.log(id, "idddddd");

    const data = await getFilm(id);
    this.setState({
      elementId: id,
      edite: true,
      initialValues: data,
    });
  };

  onSubmit = (data) => {
    const { elementId } = this.state;
    console.log(data, "data");

    if (!elementId) {
      postFilm(data).then((res) => {
        this.setState((prevState) => {
          return {
            data: [...prevState.data, res],
            edite: false,
          };
        });
      });
    } else {
      putFilm(elementId, data).then((res) => {
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
    console.log(initialValues, "initialValues");

    return (
      <Dashboard>
        {edite ? (
          <div className="bg-secondary p-4">
            <div className="row mb-3">
              <div className="col">
                <h5 className="text-right mb-4">افزودن فیلم جدید</h5>
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
            <FilmForm
              onSubmitForm={this.onSubmit}
              // initialValues={initialValues}
            />
          </div>
        ) : (
          <>
            <div className="row mb-3">
              <div className="col">
                <h5 className="text-right mb-4">لیست فیلم ها</h5>
              </div>
              <div className="col">
                <div className="text-left">
                  <button
                    onClick={this.handelChange}
                    type="button"
                    className="btn btn-primary"
                  >
                    افزودن فیلم جدید
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
                    نوع
                  </th>
                  <th className="text-primary text-center" scope="col">
                    امتیاز
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
                    <tr key={item.id}>
                      <th>{item.title}</th>
                      <td className="text-center">{item.type}</td>
                      <td className="text-center">{item.rate}</td>
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
                          onClick={() => this.setElementId(item.id)}
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
          // tabindex="-1"
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

export default Film;
