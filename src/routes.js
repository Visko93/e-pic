import * as React from "react";
import { Switch, Route } from "react-router-dom";

import css from "./styles/global.module.css";

import Photos from "./components/pages/Photos";
import Cart from "./components/pages/Cart";

function Routes() {
  return (
    <div style={css}>
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/profile">
          <Cart />
        </Route>
        {/* <Route component={NorFound} /> */}
      </Switch>
    </div>
  );
}

export default Routes;
