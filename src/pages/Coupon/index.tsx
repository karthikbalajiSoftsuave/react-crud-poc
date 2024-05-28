import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AddCoupon } from "./AddCoupon";
import { CouponList } from "./CouponList";

type Tprops = {

}
export const CouponModule: React.FC<Tprops> = () => {
    return (
        <div>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/coupon-code/coupons/allCoupons" />} />
                    <Route path="/allCoupons/*" element={<CouponList />} />
                    <Route path="/addCoupons/*" element={<AddCoupon />} />
                    <Route path="/editCoupons/*" element={<AddCoupon />} />
                </Routes>
            </div>

        </div>
    )
}