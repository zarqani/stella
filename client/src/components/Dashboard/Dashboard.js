import React, { Component } from "react";
import Header from "../Header";

class Dashboard extends Component {
  render() {
    return (
      <>
        <Header type={1} />
        <section className="section bg-secondary">
          <div className="container">
            <div className="card card-profile shadow mt--300">
              <div className="p-5">{this.props.children}</div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Dashboard;
