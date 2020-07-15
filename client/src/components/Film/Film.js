import React, { Component } from "react";
import { getFilm, getFilmpeopleFilm } from "../../api/Film";
import { API_URL } from "../../env";
import CommentForm from "./CommentForm";
import { getFilmpeople } from "../../api/Filmpeople";

class Film extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      filmpeople: [],
    };
  }

  async componentDidMount() {
    console.log(this.props.match.params.id, "this.props.history");
    const filmpeople = [];

    const data = await getFilm(this.props.match.params.id);
    const filmp = await getFilmpeopleFilm(this.props.match.params.id).then(
      (res) => {
        res.map((item) => {
          getFilmpeople(item.filmPeopleID).then((resp) => {
            // console.log(resp, "resp");

            filmpeople.push(resp);
            // console.log(filmpeople, "filmpeoplekkkkkk");
            this.setState({
              filmpeople,
            });
          });
        });
      }
    );

    this.setState({
      data,
    });
  }

  render() {
    const { data, filmpeople } = this.state;
    console.log(filmpeople, "filmpeople");

    const metas = data && data.metas && data.metas.split(" ");
    const video = `${API_URL}${data.video}`;
    // console.log(metas, "metas");

    return (
      <section>
        <section className="section section-shaped section-lg">
          <div
            className="shape shape-style-1 shape-style-img"
            style={{ backgroundImage: `url(${API_URL + data.thumbnail})` }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="container text-right text-white pt-lg-7">
            <div className="row justify-content-center">
              <div className="col-md-auto">
                <img src={API_URL + data.thumbnail} />
              </div>
              <div className="col">
                <div className="border-bottom pb-4 border-light">
                  <div className="detailsBox">
                    <h1 className="h5 text-white">
                      <span></span>
                      <span>{data.title}</span>
                    </h1>
                    <p>{data.subtitle}</p>
                  </div>
                  <div className="mb-3">
                    {metas &&
                      metas.length &&
                      metas.map((item) => (
                        <a href="#" className="btn btn-dark btn-sm">
                          <span className="btn-inner--text">{item}</span>
                        </a>
                      ))}
                  </div>
                  <div className="text-yellow small mb-2">
                    <i className="fa fa-warning ml-2" />
                    مناسب برای {data.ages}
                  </div>
                  <div className="small mb-2">
                    <i className="fa fa-star text-yellow ml-2" />
                    <span>2.7 </span>
                    سال
                  </div>
                  <div className="small mb-2">
                    <i className="fa fa-comment-alt ml-2" />
                    <span>0</span>
                  </div>
                  <div>کشور سازنده : {data.manufacturingCountry}</div>
                </div>
                <div className="text-left mt-3">
                  <button
                    type="button"
                    class="btn btn-outline-white mb-3"
                    data-toggle="modal"
                    data-target="#videoModal"
                  >
                    <span className="btn-inner--text">تماشای فیلم</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="text-right mb-5">
            <nav className="film-nav-tabs bg-gradient-default text-white">
              <div className="container">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    در یک نگاه
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    عوامل
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    نظرات
                  </a>
                </div>
              </div>
            </nav>
            <div className="container">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="row justify-content-between py-5">
                    <div className="col-6">
                      <video
                        controls
                        width="500"
                        src={API_URL + data.trailer}
                        preload="none"
                        class="btn-block"
                        controlsList="nodownload"
                      />
                      {/* <video width="500" controls class="btn-block">
                        <source src={API_URL + data.trailer} type="video/mp4" />
                        <source src={API_URL + data.trailer} type="video/ogg" />
                      </video> */}
                    </div>
                    <div className="col-6">
                      <h1 className="h6">
                        <span>{data.title}</span>
                      </h1>
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="row justify-content-space py-5">
                    {filmpeople &&
                      filmpeople.length &&
                      filmpeople.map((item) => (
                        <div className="col-2">
                          <a>
                            <div className="card text-center">
                              <img
                                src={
                                  item.thumbnail
                                    ? API_URL + item.thumbnail
                                    : "../assets/img/faces/avatar.jpg"
                                }
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body p-1">
                                <h5 className="strong small">{item.name}</h5>
                                <span className="card-text">{item.role}</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div className="py-5">
                    <div className="card p-4 mb-3">
                      <CommentForm />
                    </div>
                    <div className="card mb-3">
                      <div className="row justify-content-between no-gutters">
                        <div className="col-auto">
                          <div class="avatar avatar-lg rounded-circle m-3">
                            <img
                              alt="Image placeholder"
                              src="../assets/img/faces/avatar.jpg"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="card-body p-3">
                            <h5 className="card-title mb-1 h6">
                              کاربر بدون نام
                            </h5>
                            <p className="card-text">فیلم بسیاررر عالی بود.</p>
                            <p className="card-text">
                              <small className="text-muted">3 دقیقه قبل</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="modal fade show"
          id="videoModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modal-form"
          aria-modal="true"
        >
          <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content">
              <div className="modal-body p-0">
                {video && (
                  <video
                    controls
                    width="500"
                    src={video}
                    preload="none"
                    class="btn-block"
                    controlsList="nodownload"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Film;
