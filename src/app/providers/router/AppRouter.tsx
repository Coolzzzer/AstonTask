import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { lazy, StrictMode, Suspense } from 'react';
import { UserTabs } from '../../../widgets/UserTabs/UserTabs';
import PhotosPage from '../../../pages/PhotosPage/PhotosPage';

const  CommentPage = lazy(() => import('../../../pages/CommentPage/CommentPages'));
const  UserPostsPage = lazy(() => import('../../../pages/UserPostsPage/UserPostsPage'));
const  UserAlbumsPage = lazy(() => import('../../../pages/UserAlbumsPage/UserAlbumsPage'));
const  UserTodosPage = lazy(() => import('../../../pages/UserTodosPage/UserTodosPage'));
const  UsersPage = lazy(() => import('../../../pages/UsersPage/UsersPage'));


export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserTabs/>,
      children: [
        { index: true, element: <UserPostsPage/> },
        { path: "/users/", element: <UsersPage/> },
        { path: "/users/:userId/posts", element: <UserPostsPage/> },
        { path: "/posts/:postId/comments", element: <CommentPage/> },
        { path: "users/:userId/albums", element: <UserAlbumsPage/> },
        { path: "/users/:userId/todos", element: <UserTodosPage/> },
        { path: "/photos/:albumId", element: <PhotosPage/> },
      ], 
    }
  ]);
  return (
    <StrictMode>
      <Suspense fallback={<div>Загрузка...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
};