import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {

  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">
          {route.element}
        </div>
      </Suspense>
    );

    return (< Route
      key={route.path}
      path={route.path}
      element={route.authOnly ?
        <RequireAuth>
          {element}
        </RequireAuth>
        : element
      }
    />)
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
