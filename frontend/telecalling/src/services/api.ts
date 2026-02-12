import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import ApiLists from "./ApiLists"

export const CommonApi = createApi({
    reducerPath:'common',
    baseQuery:fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL,
    }),
    tagTypes:['commonapi'],
    endpoints:(builder)=>({
        getDashboard: builder.query({
            query:()=> ApiLists.common.getAdminDash,
        }),

        getEmployeeStatus: builder.query({
            query:()=>'/emp-status'
        }),

        uploadLeads: builder.mutation({
            query:(formData)=>({
                url: ApiLists.leads.postUpload,
                method:"POST",
                body:formData
            })
        }),

        getAllTeleCallersList: builder.query({
            query:()=>ApiLists.common.getAllTele,
        }),
        AssignLeads:builder.mutation({
            query:(data)=>({
                url:ApiLists.leads.postAssign,
                method:'POST',
                body:data,
            })
        })
    })
})

export const {
    useGetDashboardQuery,
    useGetEmployeeStatusQuery,
    useUploadLeadsMutation,
    useGetAllTeleCallersListQuery,
    useAssignLeadsMutation,
} = CommonApi