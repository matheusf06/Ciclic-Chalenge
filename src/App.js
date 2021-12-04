import React from "react";
import "./style.css";

import { HashRouter, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Containers/Home";
import Result from "./Containers/Result";

export default function App() {
  return (
    <div className="app">
      <Header />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resultado" component={Result} />
        </Switch>
      </HashRouter>
      <Footer />
    </div>
  );
}
