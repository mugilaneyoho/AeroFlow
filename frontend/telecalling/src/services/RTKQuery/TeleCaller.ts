import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ApiLists from '../ApiLists'

export const TeleCallerApi = createApi({
    reducerPath: 'telecallerapi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL,
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
                url: ApiLists.telecaller.post,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['telecaller']
        }),
        getTeleCaller: builder.query({
            query: () => ApiLists.telecaller.getAll,
            providesTags: ['telecaller']
        }),
        updateTeleCaller:builder.mutation({
            query:(data)=>({
                url:ApiLists.telecaller.put.replace(':uuid',data?.uuid),
                method:'PUT',
                body: data,
            })
        }),
        getTeleCallerByUUID:builder.query({
            query:(uuid:string | undefined)=>ApiLists.telecaller.getByUUID.replace(':uuid', uuid as string),
            providesTags: ['telecaller']
        }),
        deleteTeleCaller:builder.mutation({
            query:(uuid)=>({
                url:ApiLists.telecaller.delete.replace(':uuid',uuid),
                method:'DELETE',
            }),
            invalidatesTags:['telecaller']
        }),

    })
})

export const {
    useGetTeleCallerQuery,
    useCreateTeleCallerMutation,
    useDeleteTeleCallerMutation,
    useUpdateTeleCallerMutation,
    useGetTeleCallerByUUIDQuery
} = TeleCallerApi