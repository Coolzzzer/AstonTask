import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from './model/usersTypes';

  export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
        query: () => `/users`,
        providesTags: (result) =>
          result
            ? result.map(({ id }) => ({ type: 'User', id }))
            : [{ type: 'User', id: 'LIST' }],
      }),      
    }),
  });

  export const { useGetUsersQuery} = usersApi;