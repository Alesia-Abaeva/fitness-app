import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './config';
import LayoutPage from './layout';

const Home = React.lazy(() => import('./home'));
const NotFound = React.lazy(() => import('./notfound'));

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<LayoutPage />}>
        <Route index element={<Home />} />
        {/* <Route path={`${ROUTES.detail}/:id`} element={<Detail />} /> */}
        <Route path={ROUTES.notFound} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Routing;
