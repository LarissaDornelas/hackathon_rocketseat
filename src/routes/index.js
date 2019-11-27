import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Journey from "../pages/Journey";
import Ranking from "../pages/Ranking";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/journey" component={Journey} />
        <Route exact path="/ranking" component={Ranking} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
