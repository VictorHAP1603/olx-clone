import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />

      <Route path="/sobre" component={About} />

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
