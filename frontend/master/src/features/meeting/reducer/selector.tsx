import type { RootState } from "../../../store/store";

export const selectMeetings = (state: RootState) => state.meeting.data;

export const selectMeeting = (state: RootState) =>
    state.meeting.selectedMeeting;