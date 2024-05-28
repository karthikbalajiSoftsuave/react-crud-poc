import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../layouts";

type Tprops = {

}
export const PrivateRoutes: React.FC<Tprops> = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<Navigate replace to="/coupon-code/coupons" />} />
                <Route path='coupon-code/*' element={<Layout />} />
            </Routes>
        </>
    )
}