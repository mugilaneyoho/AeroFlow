import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetLocalStorage } from '../utils/LocalStorage';

export const globalApi = createApi({
    reducerPath: 'globalApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
        prepareHeaders: (headers) => {
            const token = GetLocalStorage('t_r_tk')
            if (token) {
                headers.set('authorization', `${token}`)
            }
            return headers
        }
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: 'auth/admins/login',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useLoginMutation } = globalApi;