import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import AdPage from "../pages/AdPage";

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/sobre" component={About} />
      <Route path="/ad/:id" component={AdPage} />

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
