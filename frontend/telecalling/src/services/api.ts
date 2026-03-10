import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import ApiLists from "./ApiLists"
import { GetLocalStorage } from "../utils/LocalStorage"

export const CommonApi = createApi({
    reducerPath: 'common',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL,
        prepareHeaders: (headers) => {
            const token = GetLocalStorage('t_a_tk')
            if (token) {
                headers.set('authorization', `${token}`)
            }
            return headers
        }
    }),
    tagTypes: ['commonapi', 'leads'],
    endpoints: (builder) => ({
        getDashboard: builder.query({
            query: () => ApiLists.common.getAdminDash,
        }),

        getEmployeeStatus: builder.query({
            query: () => '/telecalling/emp-status'
        }),

        uploadLeads: builder.mutation({
            query: (formData) => ({
                url: ApiLists.leads.postUpload,
                method: "POST",
                body: formData
            })
        }),
        getAllTeleCallersList: builder.query({
            query: () => ApiLists.common.getAllTele,
        }),
        AssignLeads: builder.mutation({
            query: (data) => ({
                url: ApiLists.leads.postAssign,
                method: 'POST',
                body: data,
            })
        }),
        getAllLeads: builder.query({
            query: () => ApiLists.leads.getAll,
            providesTags: ['leads']
        }),
        TelecallerLogin: builder.mutation({
            query: (data) => ({
                url: data?.isAdmin ? ApiLists.login.admin : ApiLists.login.tele,
                method: 'POST',
                body: data
            })
        }),
        getActiveEmployee: builder.query({
            query: () => ApiLists.common.getactiveemp,
        }),
        getRecentAdmission: builder.query({
            query: () => ApiLists.common.getrecetamit,
        }),
        getAllPayments: builder.query({
            query: () => ApiLists.common.getAllpayment
        })
    })
})

export const {
    useGetDashboardQuery,
    useGetEmployeeStatusQuery,
    useUploadLeadsMutation,
    useGetAllTeleCallersListQuery,
    useAssignLeadsMutation,
    useGetAllLeadsQuery,
    useTelecallerLoginMutation,
    useGetActiveEmployeeQuery,
    useGetRecentAdmissionQuery,
    useGetAllPaymentsQuery,
} = CommonApi