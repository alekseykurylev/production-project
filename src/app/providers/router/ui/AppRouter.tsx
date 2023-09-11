import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig";
import { PageLoader } from "widgets/PageLoader";

export const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={
          <React.Suspense fallback={<PageLoader />}>
            <div className='page-wrapper'>{element}</div>
          </React.Suspense>
        }
      />
    ))}
  </Routes>
);
