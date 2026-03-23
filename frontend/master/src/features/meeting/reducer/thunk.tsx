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

export const getMeetingsThunk = () => async (dispatch: any) => {
    try {
        const data = await fetchAllMeetings();
        dispatch(getAllMeetings(data));
    } catch (error) {
        console.log("GET MEETINGS ERROR:", error);
    }
};

export const createMeetingThunk = (payload: any) => async (dispatch: any) => {
    try {
        const data = await createMeetingApi(payload);
        dispatch(createMeeting(data));
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