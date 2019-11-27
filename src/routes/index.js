import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Journey from "../pages/Journey";
import Mission from "../pages/Mission";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/journey" component={Journey} />
        <Route exact path="/mission" component={Mission} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
