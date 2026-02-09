import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const TeleCallerApi = createApi({
    reducerPath: 'telecallerapi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3006',
        // prepareHeaders: (headers, { getState }) => {
        //     const token = getState().auth.token
        //     if (token) {
        //         headers.set('authorization', `Bearer ${token}`)
        //     }
        //     return headers
        // }
    }),
    tagTypes: ['telecaller'],
    endpoints: (builder) => ({
        CreateTeleCaller: builder.mutation({
            query: (data) => ({
                url: '/employee/create',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['telecaller']
        }),
        getTeleCaller: builder.query({
            query: () => '/employee/all',
            providesTags: ['telecaller']
        })

    })
})

export const {
    useGetTeleCallerQuery,
    useCreateTeleCallerMutation,
} = TeleCallerApi