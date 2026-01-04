import axios from "axios"
import { APPLICATION_API_END_POINT } from "../utils/constant"
import { setAllAppliedJobs } from "../redux/jobSlice"

export const applyJob = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${id}`, { withCredentials: true });
        if (res.data.success) {
            dispatch(getAppliedJobs());
        }
    } catch (error) {
        console.log(error);
    }
}

export const getAppliedJobs = () => async (dispatch) => {
    try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, { withCredentials: true });
        if (res.data.success) {
            dispatch(setAllAppliedJobs(res.data.application));
        }
    } catch (error) {
        console.log(error);
    }
}

export const bookmarkJob = (id) => async (dispatch) => {
    try {
        const res = await axios.post(`${APPLICATION_API_END_POINT}/bookmark/${id}`, {}, { withCredentials: true });
        if (res.data.success) {
            // Optionally refresh jobs or applied jobs
        }
    } catch (error) {
        console.log(error);
    }
}