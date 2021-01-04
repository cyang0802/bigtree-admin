import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./config";

export default function Routes() {
  const renderRoutes = (routes) => {
    const routesChildren = routes.map((route, i) => {
      const { path, exact, component } = route;

      return (
        <Route
          key={path || route}
          exact={exact}
          path={path}
          component={component}
        />
      );
    });

    return <Switch>{routesChildren}</Switch>;
  };

  return (
    <BrowserRouter>
      {renderRoutes([...routes.menus, ...routes.other])}
    </BrowserRouter>
  );
}
