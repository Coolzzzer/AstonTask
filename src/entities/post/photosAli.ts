import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Photos } from './model/photosTypes';
 
  export const photosApi = createApi({
    reducerPath: 'photosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
      getPhotosByAlbumId: builder.query<Photos[], number>({
        query: (albumId) => `/photos?albumId=${albumId}`,
        providesTags: (result) =>
          result
            ? result.map(({ id }) => ({ type: 'Post', id }))
            : [{ type: 'Post', id: 'LIST' }],
      }),      
    }),
  });

  export const { useGetPhotosByAlbumIdQuery } = photosApi;