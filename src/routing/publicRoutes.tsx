import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login";

type Tprops = {

}
export const PublicRoutes: React.FC<Tprops> = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<Navigate replace to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </>
    )
}