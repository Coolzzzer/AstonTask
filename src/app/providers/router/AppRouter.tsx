import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { StrictMode } from 'react';

import { UserTabs } from '../../../widgets/UserTabs/UserTabs';
import { UserAlbumsPage } from '../../../pages/UserAlbumsPage';
import { UserTodosPage } from '../../../pages/UserTodosPage';
import { UserPostsPage } from '../../../pages/UserPostsPage';
import { CommentPage } from '../../../pages/CommentPages';



export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserTabs/>,
      children: [
        { path: "/users/:userId/posts", element: <UserPostsPage/> },
        { path: "/posts/:postId/comments", element: <CommentPage/> },
        { path: "users/:userId/albums", element: <UserAlbumsPage/> },
        { path: "/users/:userId/todos", element: <UserTodosPage/> },
      ],
    }
  ]);
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};
