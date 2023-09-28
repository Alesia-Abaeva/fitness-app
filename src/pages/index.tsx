import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./config";
import { LayoutPage } from "./layout";

// const Home = lazy(() => import("./home"));
// const NotFound = lazy(() => import("./notfound"));

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.main} element={<LayoutPage />}>
        <Route index element={<Home />} />
        <Route path={`${ROUTES.detail}/:id`} element={<Login />} />

        <Route path={ROUTES.notFound} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Routing;
