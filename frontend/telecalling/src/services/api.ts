import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const CommonApi = createApi({
    reducerPath:'common',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3006',
    }),
    tagTypes:['commonapi'],
    endpoints:(builder)=>({
        getDashboard: builder.query({
            query:()=>'/dashboard'
        }),

        getEmployeeStatus: builder.query({
            query:()=>'/emp-status'
        }),

        uploadLeads: builder.mutation({
            query:(formData)=>({
                url:'/leads/upload',
                method:"POST",
                body:formData
            })
        })
    })
})

export const {
    useGetDashboardQuery,
    useGetEmployeeStatusQuery,
    useUploadLeadsMutation,
} = CommonApi