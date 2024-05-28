export const USER_DETAILS = "USER_DETAILS"
export const COUPON_DETAILS = "COUPON_DETAILS" 

export const setUserDetails = (data: any) => ({ type: USER_DETAILS, payload: data });
export const setCouponDetails = (data: any) => ({ type: COUPON_DETAILS, payload: data });