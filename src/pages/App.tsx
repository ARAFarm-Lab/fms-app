import "./App.css";
import React from "react";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";

const Root: React.FC = () => {
  return <Outlet />;
};

const rootRoute = createRootRoute({
  component: Root,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
}).lazy(() => import("./auth").then((d) => d.AuthRoute));

const routeTree = rootRoute.addChildren([
  homeRoute,
  // homeRoute.addChildren([authRoute]),
]);

const router = createRouter({
  routeTree,
  defaultPendingMs: 0,
  defaultPendingMinMs: 0,
});

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
