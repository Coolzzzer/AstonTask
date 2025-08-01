import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from '../../../entities/post/postsApi';
import { commentsApi } from '../../../entities/post/commentsApi';
import { todosApi } from '../../../entities/post/todosApi';
import { albumsApi } from '../../../entities/post/albumsApi';
import postReducer from '../../../entities/post/model/slice/postSlice';
import userReducer from '../../../entities/user/model/slice/userSlice';
import { usersApi } from '../../../entities/post/usersApi';
import { photosApi } from '../../../entities/post/photosAli';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
    post: postReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      postsApi.middleware,
      commentsApi.middleware,
      albumsApi.middleware,
      todosApi.middleware,
      photosApi.middleware
    ),
});

setupListeners(store.dispatch);
