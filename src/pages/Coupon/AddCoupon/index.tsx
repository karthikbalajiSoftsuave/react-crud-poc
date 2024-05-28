import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MenuButton } from "../../../components/MenuButton";
import { ClaimRules } from "./ClaimRules";
import { CouponGeneration } from "./CouponGeneration";
import { ProductCoupon } from "./ProductCoupon";
import DiscountIcon from "../../../assets/icons/discount.svg"
import AddProductsIcon from "../../../assets/icons/add-product.svg"
import SignatureIcon from "../../../assets/icons/signature.svg"
import SearchIcon from "../../../assets/icons/search.svg"
import "./styles.scss"
import { CouponSummary } from "./CouponSummary";

type Tprops = {

}

export const AddCoupon: React.FC<Tprops> = () => {
    return (
        <div className="coupon-page">
            <div className="coupon-page-header">
                <MenuButton path={"/coupon-code/coupons/addCoupons/coupon-generation"} img={DiscountIcon} name={"Coupon Generations"} />
                <MenuButton path={"/coupon-code/coupons/addCoupons/products"} img={AddProductsIcon} name={"Products"} />
                <MenuButton path={"/coupon-code/coupons/addCoupons/claim-rules"} img={SignatureIcon} name={"Claim Rules"} />
                <MenuButton path={"/coupon-code/coupons/addCoupons/summary"} img={SearchIcon} name={"Summary"} />
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/coupon-code/coupons/addCoupons/coupon-generation" />} />
                    <Route path="/coupon-generation" element={<CouponGeneration />} />
                    <Route path="/claim-rules" element={<ClaimRules />} />
                    <Route path="/products" element={<ProductCoupon />} />
                    <Route path="/summary" element={<CouponSummary />} />
                </Routes>
            </div>
        </div>
    )
}