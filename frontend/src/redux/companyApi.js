import axios from "axios"
import { COMPANY_API_END_POINT } from "../utils/constant"
import { setCompanies } from "../redux/companySlice"

export const getCompanies = () => async (dispatch) => {
    try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get`, { withCredentials: true });
        if (res.data.success) {
            dispatch(setCompanies(res.data.companies));
        }
    } catch (error) {
        console.log(error);
    }
}