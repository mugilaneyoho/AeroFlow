import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Meeting {
    id: number;
    mobileNumber?: string;
    visitor: string;
    purposeOfMeeting: string;
    requestedTime: string;
    date: string;
    meetingId?: string;
    priority: string;
    status: string;
    createdAt: string;
}

interface MeetingState {
    data: Meeting[];
    selectedMeeting: Meeting | null;
}

const initialState: MeetingState = {
    data: [],
    selectedMeeting: null
};

const MeetingSlice = createSlice({
    name: "meeting",
    initialState,
    reducers: {
        getAllMeetings: (state, action:PayloadAction<Meeting[]>) => {
            state.data = action.payload;
        },
        getMeetingById: (state, action:PayloadAction<Meeting>) => {
            state.selectedMeeting = action.payload;
        },
        createMeeting: (state, action:PayloadAction<Meeting>) => {
            state.data.push(action.payload);
        },
        updateMeetingState: (state, action:PayloadAction<Meeting>) => {
            const index = state.data.findIndex(
                (m) => m.id === action.payload.id
            );
            if (index !== -1) {
                state.data[index] = action.payload;
            }
        },
        clearSelectedMeeting: (state) => {
            state.selectedMeeting = null;
        }
    }
});

export const {
    getAllMeetings,
    getMeetingById,
    createMeeting,
    updateMeetingState,
    clearSelectedMeeting
} = MeetingSlice.actions;

export default MeetingSlice.reducer;