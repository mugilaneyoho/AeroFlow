import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ApiLists from "../ApiLists";

export const CallerQueryApi = createApi({
    reducerPath:'callerquery',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL,
    }),
    tagTypes: ['leads','compleads'],
    endpoints: (builder)=>({
        getEmployeeLeads: builder.query({
            query:({uuid,status})=>({
                url:ApiLists.leads.getByemp.replace(':uuid',uuid),
                params:{status},
            }),
            providesTags:['leads'],
        }),
        updateEmployeeLeads: builder.mutation({
            query:(data)=>({
                url: ApiLists.leads.putStatus.replace(':uuid',data.uuid),
                method:'PUT',
                body:data,
            }),
            invalidatesTags: ['compleads']
        }),
        getEmployeeCompletedLeads: builder.query({
            query:(data)=>ApiLists.leads.completeLeads.replace(':uuid',data.uuid),
            providesTags:['compleads']
        })
    })
})

export const {
    useGetEmployeeCompletedLeadsQuery,
    useGetEmployeeLeadsQuery,
    useUpdateEmployeeLeadsMutation,
} = CallerQueryApi