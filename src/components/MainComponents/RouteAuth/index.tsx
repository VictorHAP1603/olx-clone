import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import { useAuth } from "../../../hooks/useAuth";

interface IRouteAuthProps extends RouteProps {
  privateRoute?: boolean;
}

export const RouteAuth = ({
  children,
  privateRoute,
  ...rest
}: IRouteAuthProps) => {
  const { isLogged } = useAuth();

  const authorization = privateRoute && !isLogged() ? false : true;

  return (
    <Route {...rest}>
      {authorization ? children : <Redirect to="/signin" />}
    </Route>
  );
};
