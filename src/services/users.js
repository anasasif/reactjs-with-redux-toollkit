import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const UsersApi = createApi({
  reducerPath: 'UsersApi',

  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_CONNECT}/`,
  }),

  tagTypes: ['User'],
  refetchOnMountOrArgChange: 1,
  endpoints: (builder) => ({

    loginUser: builder.mutation({
      query: (data) => ({
        url: `api/login`,
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        }
      }),
  
      invalidatesTags: ['User'],
    }),

    registerUser: builder.mutation({
      query: (data) => ({
        url: `api/registration`,
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        }
      }),
  
      invalidatesTags: ['User'],
    }),


  }),

})

export const { useLoginUserMutation, useRegisterUserMutation } = UsersApi