import { ApiCall, API_END_POINTS } from ".";
import { ICouponGeneration } from "../../interface/couponGeneration.interface";


export const CouponGenerationService = async (values: ICouponGeneration) => {
    try {
        const res = await ApiCall.post(API_END_POINTS.ADD_COUPON, values);
        if (res.status === 200 || res.status === 201) {
            return res.data;
        }
        return {};
    }
    catch (err) {

    }
} 