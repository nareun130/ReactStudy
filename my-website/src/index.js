import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Home, About, Events, Products, Contact, Whoops404 } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Redirect from="/history" to="/about/history"></Redirect>
        <Redirect from="/services" to="/about/services"></Redirect>
        <Redirect from="/location" to="/about/location"></Redirect>
        <Route path="/about" component={About}></Route>
        <Route path="/events" component={Events}></Route>
        <Route path="/products" component={Products}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route component={Whoops404} />
      </Switch>
    </div>
  </BrowserRouter>
);
