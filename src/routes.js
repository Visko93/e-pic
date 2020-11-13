import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Photos from "./components/pages/Photos";
import Card from "./components/pages/Card";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Photos />
      </Route>
      <Route path="/card">
        <Card />
      </Route>
      <Route component={() => {}} />
    </Switch>
  );
}

export default Routes;
