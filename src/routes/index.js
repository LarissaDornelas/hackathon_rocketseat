import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
