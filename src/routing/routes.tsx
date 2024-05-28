import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Reducer";
import { PrivateRoutes } from "./privateRoutes";
import { PublicRoutes } from "./publicRoutes";

type Tprops = {

}
export const RootRoutes: React.FC<Tprops> = () => {

    const isValid = useSelector((state: RootState) => state?.authData?.userData);    

    return (
        isValid ? <PrivateRoutes /> : <PublicRoutes />
    )
}