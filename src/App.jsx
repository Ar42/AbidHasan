import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Home } from "./Home";
import { About } from "./About";
import { Education } from "./Education";
import { Others } from "./Others";
import { Navbar } from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import { Footer } from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/others" component={Others} />
        <Redirect to="/" />
      </Switch>
      {/* <Footer /> */}
    </>
  );
};

export { App };
