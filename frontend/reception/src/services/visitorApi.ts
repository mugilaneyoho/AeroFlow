import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Visitor {
    id?: number;
    visitorName: string;
    mobileNumber: string;
    purposeOfVisit: string;
    visitType: string;
    date: string;
    requestedTime: string;
    createdAt?: string;
}

export const visitorApi = createApi({
    reducerPath: 'visitorApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes: ['Visitors'],
    endpoints: (builder) => ({
        getVisitors: builder.query<Visitor[], void>({
            query: () => 'visitors',
            providesTags: ['Visitors'],
        }),
        addVisitor: builder.mutation({
            query: (newVisitor) => ({
                url: 'visitors',
                method: 'POST',
                body: newVisitor,
            }),
            invalidatesTags: ['Visitors'],
        }),
    }),
});

export const { useAddVisitorMutation, useGetVisitorsQuery } = visitorApi;