import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { StrictMode, Suspense } from 'react';
import { routes } from '../../../shared/config/router/router';

export const AppRouter = () => {
  const router = createBrowserRouter(routes);
  return (
    <StrictMode>
      <Suspense fallback={<div>Загрузка...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
};