import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from '../../entities/post/postsApi';
import { commentsApi } from '../../entities/post/commentsApi';
import { todosApi } from '../../entities/post/todosApi';
import { albumsApi } from '../../entities/post/albumsApi';
import postReducer from '../../entities/model/slice/postSlice';
import userReducer from '../../entities/model/slice/userSlice';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    post: postReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      commentsApi.middleware,
      albumsApi.middleware,
      todosApi.middleware
    ),
});

setupListeners(store.dispatch);
