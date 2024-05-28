import { COUPON_DETAILS } from "../Actions/actions";


const initialState = {
    couponData: undefined
};
type ICoupon = {
    couponData: any,
};

export const CouponReducer = (state: ICoupon = initialState, action: any) => {

    switch (action.type) {
        case COUPON_DETAILS:
            return {
                ...state,
                couponData: action.payload
            };
        default:
            return state;
    }
};
