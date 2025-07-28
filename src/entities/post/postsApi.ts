import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post } from '../types/postsTypes';

  export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
      getPostsByUserId: builder.query<Post[], number>({
        query: (userId) => `/posts?userId=${userId}`,
        providesTags: (result) =>
          result
            ? result.map(({ id }) => ({ type: 'Post', id }))
            : [{ type: 'Post', id: 'LIST' }],
      }),      
    }),
  });

  export const { useGetPostsByUserIdQuery } = postsApi;
