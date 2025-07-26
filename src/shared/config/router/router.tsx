import { lazy } from 'react';
import { UserTabs } from '../../../widgets/UserTabs/UserTabs';

const UserPostsPage = lazy(() => import('../../../pages/UserPostsPage/UserPostsPage'));
const PostsPage = lazy(() => import('../../../pages/PostsPage/PostPages'));
const PostDetailsPage = lazy(() => import('../../../pages/PostDetailsPage/PostDetailsPage'));
const UserAlbumsPage = lazy(() => import('../../../pages/UserAlbumsPage/UserAlbumsPage'));
const AlbumPhotosPage = lazy(() => import('../../../pages/AlbumPhotosPage/AlbumPhotosPage'));
const UserTodosPage = lazy(() => import('../../../pages/UserTodosPage/UserTodosPage'));

export const routes = [
  {
    path: '/',
    element: <UserTabs />,
    children: [
      { index: true, element: <PostsPage /> },
      { path: 'posts', element: <PostsPage /> },
      { path: 'posts/:id', element: <PostDetailsPage /> },
      { path: 'users/:userId/albums', element: <UserAlbumsPage /> },
      { path: 'albums/:id/photos', element: <AlbumPhotosPage /> },
      { path: 'users/:userId/todos', element: <UserTodosPage /> },
      { path: 'users/:userId/posts', element: <UserPostsPage /> },
    ],
  },
];
