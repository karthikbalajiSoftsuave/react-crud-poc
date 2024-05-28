import { ApiCall, API_END_POINTS } from ".";
import { ILogin } from "../../interface/login.interface";

export const LoginService = async (values: ILogin) => {
    try {
        const res = await ApiCall.post(API_END_POINTS.LOGIN, values);
        if (res.status === 200 || res.status === 201) {
            return res.data;
        }
        return {};
    } catch (e) {
        console.error(e);
        return null;
    }
};