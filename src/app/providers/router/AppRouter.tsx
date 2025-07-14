import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { PostsPage } from '../../../pages/PostPages';
import { PostDetailsPage } from '../../../pages/PostDetailsPage';
import { UserAlbumsPage } from '../../../pages/UserAlbumsPage';
import { AlbumPhotosPage } from '../../../pages/AlbumPhotosPage';
import { UserTodosPage } from '../../../pages/UserTodosPage';
import { StrictMode } from 'react';
import { UserTabs } from '../../../widgets/UserTabs/UserTabs';
import { UserPostsPage } from '../../../pages/UserPostsPage';



export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserTabs/>,
      children: [
        { path: "posts", element: <PostsPage/> },
        { path: "posts/:id", element: <PostDetailsPage/> },
        { path: "users/:userId/albums", element: <UserAlbumsPage/> },
        { path: "albums/:id/photos", element: <AlbumPhotosPage/> },
        { path: "/users/:userId/todos", element: <UserTodosPage/> },
        { path: "/users/:userId/posts", element: <UserPostsPage/> },
      ],
    }
  ]);
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};
