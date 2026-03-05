import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Meeting {
    id: number;
    mobileNumber: string;
    visitor: string;
    purposeOfMeeting: string;
    requestedTime: string;
    date: string;
    meetingId: string;
    createdAt?: string;
    priority?: string;
    status?: string;
}

export const meetingApi = createApi({
    reducerPath: 'meetingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes: ['Meetings'],
    endpoints: (builder) => ({
        getMeetings: builder.query<Meeting[], void>({
            query: () => 'meetings',
            providesTags: ['Meetings'],
        }),
        addMeeting: builder.mutation({
            query: (newVisitor) => ({
                url: 'meetings',
                method: 'POST',
                body: newVisitor,
            }),
            invalidatesTags: ['Meetings'],
        }),
        updateMeeting: builder.mutation<void, { id: number; date: string; requestedTime: string }>({
            query: ({ id, ...body }) => ({
                url: `/meetings/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Meetings'],
        }),
    }),
});

export const { useAddMeetingMutation, useGetMeetingsQuery, useUpdateMeetingMutation } = meetingApi;