import {
    fetchAllMeetings,
    createMeetingApi,
    updateMeetingApi
} from "../services";

import {
    getAllMeetings,
    createMeeting,
    updateMeetingState
} from "../reducer/meetingSlice";
import type { AppDispatch } from "../../../store/store";

export const getMeetingsThunk = () => async (dispatch: AppDispatch) => {
    try {
        const data = await fetchAllMeetings();
        dispatch(getAllMeetings(data));
        console.log("API RESPONSE:", data);
    } catch (error) {
        console.log("GET MEETINGS ERROR:", error);
    }
};

export const createMeetingThunk = (payload: any) => async (dispatch: any) => {
    try {
      const meeting = await createMeetingApi(payload);

        if (!meeting) {
            throw new Error("API returned undefined for created meeting");
        }

        dispatch(createMeeting(meeting)); 
        console.log("Created meeting from API:", meeting);

        return meeting; 
    } catch (error) {
        console.log("CREATE MEETING ERROR:", error);
    }
};

export const updateMeetingThunk =
    (id: number, payload: any) => async (dispatch: any) => {
        try {
            const data = await updateMeetingApi(id, payload); 
            dispatch(updateMeetingState(data));
        } catch (error) {
            console.log("UPDATE MEETING ERROR:", error);
        }
    };