import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import NotFound from "../views/errors/NotFound";
import Navbar from "../components/Navbar";
import Login from "../views/auth/Login";

function Router(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Navbar>
          <Home />
        </Navbar>
      </Route>
      <Route path="/about">
        <Navbar>
          <About />
        </Navbar>
      </Route>
      <Route path="/contact">
        <Navbar>
          <Contact />
        </Navbar>
      </Route>
      <Route path="/login" component={Login} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Router;
