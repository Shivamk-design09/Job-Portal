import axios from "axios"
import { JOB_API_END_POINT } from "../utils/constant"
import { setAllJobs, setSingleJob } from "../redux/jobSlice"

export const getAllJobs = () => async (dispatch) => {
    try {
        const res = await axios.get(`${JOB_API_END_POINT}/get`, { withCredentials: true });
        if (res.data.success) {
            dispatch(setAllJobs(res.data.jobs));
        }
    } catch (error) {
        console.log(error);
    }
}

export const getSingleJob = (jobId) => async (dispatch) => {
    try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
        if (res.data.success) {
            dispatch(setSingleJob(res.data.job));
        }
    } catch (error) {
        console.log(error);
    }
}

export const getJobsByText = (keyword, location) => async (dispatch) => {
    try {
        const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${keyword}&location=${location}`, { withCredentials: true });
        if (res.data.success) {
            dispatch(setAllJobs(res.data.jobs));
        }
    } catch (error) {
        console.log(error);
    }
}

export const getAdminJobs = () => async (dispatch) => {
    try {
        const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, { withCredentials: true });
        if (res.data.success) {
            dispatch(setAllAdminJobs(res.data.jobs));
        }
    } catch (error) {
        console.log(error);
    }
}

export const postJob = (input) => async (dispatch) => {
    try {
        const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        });
        if (res.data.success) {
            dispatch(getAdminJobs());
        }
    } catch (error) {
        console.log(error);
    }
}