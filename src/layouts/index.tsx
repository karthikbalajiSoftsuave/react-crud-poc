import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { History } from "../pages/History";
import { Reports } from "../pages/Reports";
import { Sidebar } from "./Sidebar";
import { Headers } from "./Headers";
import "./styles.scss"
import { CouponModule } from "../pages/Coupon";

type Tprops = {

}

export const Layout: React.FC<Tprops> = () => {
    return (
        <div className="layouts">
            <Sidebar />
            <div className="body">
                <Headers />
                <div className="content">
                <Routes>
                    <Route path="/" element={<Navigate replace to="/coupon-code/dashboard" />} />
                    <Route path="/coupons/*" element={<CouponModule />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/reports" element={<Reports />} />
                </Routes>
                </div>
            </div>
        </div>
    )
}