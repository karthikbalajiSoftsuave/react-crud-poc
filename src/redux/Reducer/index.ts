import { combineReducers } from "redux";

import { AuthReducer } from "./authenticationReducer";
import { CouponReducer } from "./couponReducer";

export const RootReducer = combineReducers({
    authData: AuthReducer,
    couponData: CouponReducer
});

export type RootState = ReturnType<typeof RootReducer>