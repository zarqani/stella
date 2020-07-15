import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        {this.props.type === 1 ? (
          <section className="section-profile-cover section-shaped my-0">
            <img
              className="bg-image"
              src="../assets/img/pages/mohamed.jpg"
              style={{ width: "100%" }}
            />
            <div className="separator separator-bottom separator-skew">
              <svg
                x="0"
                y="0"
                viewBox="0 0 2560 100"
                preserveAspectRatio="none"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  className="fill-secondary"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
        ) : (
          <section className="section section-shaped section-lg">
            <div
              className="shape shape-style-1 shape-style-img"
              style={{ backgroundImage: "url(../assets/img/film/4.jpg)" }}
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
            <h1 className="h3 mt-4 text-center text-white">
              {this.props.title}
            </h1>
          </section>
        )}
      </>
    );
  }
}

export default Header;
