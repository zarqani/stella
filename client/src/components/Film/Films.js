import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../Header";
import { getFilms, getFilm } from "../../api/Film";
import { API_URL } from "../../env";
import { getCategoryFilms } from "../../api/Category";

class Films extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    console.log(this.props.match.params.category, "this.props.history");
    if (this.props.match.params.category) {
      const films = [];
      const data = await getCategoryFilms(
        this.props.match.params.category
      ).then((res) => {
        console.log(res, "resres");

        res.map((item) => {
          getFilm(item.filmID).then((resp) => {
            // console.log(resp, "resp");

            films.push(resp);
            // console.log(filmpeople, "filmpeoplekkkkkk");
            this.setState({
              data: films,
            });
          });
        });
      });
    } else {
      const data = await getFilms();

      this.setState({
        data,
      });
    }
  }

  render() {
    const { data } = this.state;
    console.log(data, "data");

    return (
      <section>
        <Header title="همه فیلم ها" />
        <section>
          <div className="container text-right py-5">
            <div className="row justify-content-start">
              {data &&
                data.length > 0 &&
                data.map((item) => (
                  <div className="col-md-auto my-3">
                    <div style={{ maxWidth: "230px" }}>
                      <Link className="text-right" to={`/film/${item.id}`}>
                        <img
                          src={API_URL + item.thumbnail}
                          alt="Raised circle image"
                          className="img-fluid rounded shadow"
                        />
                        <span className="d-block text-uppercase font-weight-bold mt-3 text-center">
                          {item.title}
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default withRouter(Films);
