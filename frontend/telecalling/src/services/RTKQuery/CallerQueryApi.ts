import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ApiLists from "../ApiLists";
import { GetLocalStorage } from "../../utils/LocalStorage";

export const CallerQueryApi = createApi({
    reducerPath: 'callerquery',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL,
        prepareHeaders: (headers) => {
            const token = GetLocalStorage("af_a_tk")
            if (token) {
                headers.set('authorization', `${token}`)
            }
            return headers
        }
    }),
    tagTypes: ['leads', 'compleads', 'course', 'batch'],
    endpoints: (builder) => ({
        getEmployeeLeads: builder.query({
            query: ({ uuid, status }) => ({
                url: ApiLists.leads.getByemp.replace(':uuid', uuid),
                params: { status },
            }),
            providesTags: ['leads'],
        }),
        updateEmployeeLeads: builder.mutation({
            query: (data) => ({
                url: ApiLists.leads.putStatus.replace(':uuid', data.uuid),
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['compleads']
        }),
        getEmployeeCompletedLeads: builder.query({
            query: (data) => ApiLists.leads.completeLeads.replace(':uuid', data.uuid),
            providesTags: ['compleads']
        }),
        getTeleCallerStatusLeads: builder.query({
            query: (uuid) => ApiLists.leads.getBystatus.replace(':uuid', uuid),
        }),
        createStudentAdmission: builder.mutation({
            query: (data) => ({
                url: ApiLists.admission.student,
                method: 'POST',
                body: data,
            })
        }),
        createPaymentAdmission: builder.mutation({
            query: (data) => ({
                url: '/telecalling/payment/create',
                method: 'POST',
                body: data
            })
        }),
        getAllcourse: builder.query({
            query: () => ApiLists.admission.getallcourse,
            providesTags: ['course']
        }),
        getAllBatch: builder.query({
            query: (uuid) => ApiLists.admission.getbatchBycourse.replace(':uuid', uuid),
            providesTags: ['batch']
        })
    })
})

export const {
    useGetEmployeeCompletedLeadsQuery,
    useGetEmployeeLeadsQuery,
    useUpdateEmployeeLeadsMutation,
    useGetTeleCallerStatusLeadsQuery,
    useCreateStudentAdmissionMutation,
    useCreatePaymentAdmissionMutation,
    useGetAllcourseQuery,
    useGetAllBatchQuery,
} = CallerQueryApi