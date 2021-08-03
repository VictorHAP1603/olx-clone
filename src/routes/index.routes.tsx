import React from "react";

import { Switch } from "react-router-dom";
import { RouteAuth } from "../components/MainComponents/RouteAuth";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import AdPage from "../pages/AdPage";
import AddAd from "../pages/AddAd";

export default function Routes() {
  return (
    <Switch>
      <RouteAuth path="/" exact>
        <Home />
      </RouteAuth>

      <RouteAuth path="/signin">
        <SignIn />
      </RouteAuth>

      <RouteAuth path="/signup">
        <SignUp />
      </RouteAuth>

      <RouteAuth path="/sobre">
        <About />
      </RouteAuth>

      <RouteAuth path="/ad/:id">
        <AdPage />
      </RouteAuth>

      <RouteAuth privateRoute path="/post-an-ad">
        <AddAd />
      </RouteAuth>

      <RouteAuth path="*">
        <NotFound />
      </RouteAuth>
    </Switch>
  );
}
