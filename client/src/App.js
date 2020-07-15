import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register";
import Profile from "./components/Dashboard/Profile";
import PackageList from "./components/Dashboard/PackageList/PackageList";
import FactorDashboard from "./components/Dashboard/Factor/Factor";
import FilmDashboard from "./components/Dashboard/Film/Film";
import Filmpeople from "./components/Dashboard/Filmpeople/Filmpeople";
import Category from "./components/Dashboard/Category/Category";
import Season from "./components/Dashboard/Season/Season";
import Film from "./components/Film/Film";
import Footer from "./components/Footer";
import PakageList from "./components/PakageList/PakageList";
import Factor from "./components/Factor/Factor";
import Films from "./components/Film/Films";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard/profile" component={Profile} />
        <Route exact path="/dashboard/packageList" component={PackageList} />
        <Route exact path="/dashboard/factor" component={FactorDashboard} />
        <Route exact path="/dashboard/films" component={FilmDashboard} />
        <Route exact path="/dashboard/filmpeople" component={Filmpeople} />
        <Route exact path="/dashboard/category" component={Category} />
        <Route exact path="/dashboard/season" component={Season} />
        <Route exact path="/pakageList" component={PakageList} />
        <Route exact path="/factor/id=:id" component={Factor} />
        <Route exact path="/factor/pId=:pId" component={Factor} />
        <Route exact path="/films" component={Films} />
        <Route exact path="/films/category=:category" component={Films} />
        <Route exact path="/film/:id" component={Film} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
