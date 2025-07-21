import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Album = {
    userId: number;
    id: number;
    title: string;
  }
  
export const albumsApi = createApi({
reducerPath: 'albumsApi',
baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
tagTypes: ['Album'],
endpoints: (builder) => ({
    getAlbumsByUserId: builder.query<Album[], number>({
    query: (userId) => `/albums?userId=${userId}`,
    providesTags: (result) =>
        result
        ? [...result.map(({ id }) => ({ type: 'Album' as const, id  })), { type: 'Album', id: 'LIST' }]
        : [{ type: 'Album', id: 'LIST' }],
    }),
}),
});

export const { useGetAlbumsByUserIdQuery } = albumsApi;