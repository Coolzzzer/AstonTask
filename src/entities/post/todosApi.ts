import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Todo } from './model/todosTypes';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodosByUserId: builder.query<Todo[], number>({
      query: (userId) => `/todos?userId=${userId}`,
      providesTags: (result) =>
        result
            ? [...result.map(({ id }) => ({ type: 'Todo' as const, id })), { type: 'Todo', id: 'LIST' }]
            : [{ type: 'Todo', id: 'LIST' }]
    }),
  }),
});

export const { useGetTodosByUserIdQuery } = todosApi;
