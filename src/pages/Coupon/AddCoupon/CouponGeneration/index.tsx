/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./styles.scss"
import { TextBox } from '../../../../components/TextBox/index';
import { CKEditor } from "ckeditor4-react";
import { ActionButton } from "../../../../components/ActionButton";
import { RadioGroup } from "../../../../components/RadioGroup";
import { useForm } from "react-hook-form";
import { ICouponGeneration } from "../../../../interface/couponGeneration.interface";
import { showNotification, STATUS } from "../../../../common/constants";
import { CouponService } from "../../../../services/classService/couponService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/Reducer";
type Tprops = {

}
export const CouponGeneration: React.FC<Tprops> = () => {

    const { register, setValue, watch, handleSubmit, formState: { errors } } = useForm<ICouponGeneration>({ mode: "all" });
    const editData = useSelector<RootState>((state) => state?.couponData?.couponData)
    const couponService = new CouponService()
    const navigate = useNavigate()

    console.log("errors", errors);

    const validations = {
        couponCode: {
            required: { value: true, message: "Coupon code is empty" }
        },
        discountType: {
            required: { value: true, message: "Discount Type is empty" },
        },
        claimVariant: {
            required: { value: true, message: "Claim Variant is empty" },
        },
        couponDescription: {
            required: { value: true, message: "Coupon Description is empty" },
        },
        discountDetails: {
            amount: {
                required: { value: true, message: "Amount is empty" },
            },
            couponQuantity: {
                required: { value: true, message: "Quantity is empty" },
            },
        },
        validityDetails: {
            from: {
                required: { value: true, message: "From is empty" },
            },
            to: {
                required: { value: true, message: "To is empty" },
            },
            claimLimit: {
                required: { value: true, message: "Claim is empty" },
            },
            validityDays: {
                required: { value: true, message: "Validity is empty" },
            },
        },
    }

    const onSubmit = async (values: ICouponGeneration) => {
        console.log("values", values)
        const addCoupon = await couponService.AddCoupon(values)
        if (addCoupon.status === STATUS.SUCCESS) {
            showNotification(STATUS.SUCCESS, addCoupon.message)
            navigate("/coupon-code/coupons/allCoupons")
        }
        else {
            showNotification(STATUS.FAILURE, addCoupon.message)
        }
    }
    console.log("watch", watch())   

    return (
        <div className="coupon-generation-page">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="coupon-generation-page-header-box">
                    <p className="coupon-generation-page-header-label">Add Coupon</p>
                </div>
                <div className="coupon-generation-page-body-box">
                    <div className="coupon-generation-page-option">
                        <p className="option-label">Coupon Code</p>
                        <div className="options-textbox">
                            <TextBox
                                placeholder="e.g. BLACKFRIDAY500"
                                register={register("couponCode", validations.couponCode)}
                                error={errors.couponCode?.type !== undefined}
                                errorText={errors.couponCode ? errors.couponCode.message : ""}
                            />
                        </div>
                    </div>
                    <div className="coupon-generation-page-option">
                        <p className="option-label">Discount Type</p>
                        <RadioGroup
                            options={["Flat amount", "Percentage"]}
                            defaultValue={watch().discountType}
                            formValue={(value) => setValue("discountType", value)}
                            register={register("discountType", validations.discountType)}
                        />
                        {errors.discountType?.type !== undefined && <p className="error">{errors.discountType ? errors.discountType.message : ""}</p>}
                    </div>
                    <div className="coupon-generation-page-option">
                        <p className="option-label">Claim Variant</p>
                        <RadioGroup
                            options={["None", "OTP", "Pin"]}
                            defaultValue={watch().claimVariant}
                            formValue={(value) => setValue("claimVariant", value)}
                            register={register("claimVariant", validations.claimVariant)}
                        />
                        {errors.claimVariant?.type !== undefined && <p className="error">{errors.claimVariant ? errors.claimVariant.message : ""}</p>}
                    </div>

                </div>
                <div className="coupon-generation-page-body-box extra">
                    <div className="coupon-generation-page-option">
                        <p className="option-label">Discount Details</p>
                        <div className="options-textbox">
                            <TextBox
                                placeholder="Enter in flat amount"
                                type={"number"}
                                register={register("discountDetails.amount", validations.discountDetails.amount)}
                                error={errors.discountDetails?.amount?.type !== undefined}
                                errorText={errors.discountDetails?.amount ? errors.discountDetails.amount.message : ""}
                            />
                            <TextBox
                                placeholder="Number of coupon in digits"
                                type={"number"}
                                register={register("discountDetails.couponQuantity", validations.discountDetails.couponQuantity)}
                                error={errors.discountDetails?.couponQuantity?.type !== undefined}
                                errorText={errors.discountDetails?.couponQuantity ? errors.discountDetails.couponQuantity.message : ""}
                            />
                        </div>
                    </div>
                    <div className="coupon-generation-page-option">
                        <p className="option-label">Validity Details</p>
                        <div className="options-textbox">
                            <TextBox
                                placeholder="Valid from"
                                type={"date"}
                                register={register("validityDetails.from", validations.validityDetails.from)}
                                error={errors.validityDetails?.from?.type !== undefined}
                                errorText={errors.validityDetails?.from ? errors.validityDetails.from.message : ""}
                            />
                            <TextBox
                                placeholder="Maximum claim limit"
                                register={register("validityDetails.claimLimit", validations.validityDetails.claimLimit)}
                                error={errors.validityDetails?.claimLimit?.type !== undefined}
                                errorText={errors.validityDetails?.claimLimit ? errors.validityDetails.claimLimit.message : ""}
                            />
                        </div>
                    </div>
                    <div className="coupon-generation-page-option">
                        <p className="option-label"></p>
                        <div className="options-textbox">
                            <TextBox
                                placeholder="Valid till"
                                type={"date"}
                                register={register("validityDetails.to", validations.validityDetails.to)}
                                error={errors.validityDetails?.to?.type !== undefined}
                                errorText={errors.validityDetails?.to ? errors.validityDetails.to.message : ""}
                            />
                            <TextBox
                                placeholder="Coupon validity in days"
                                register={register("validityDetails.validityDays", validations.validityDetails.validityDays)}
                                error={errors.validityDetails?.validityDays?.type !== undefined}
                                errorText={errors.validityDetails?.validityDays ? errors.validityDetails.validityDays.message : ""}
                            />
                        </div>
                    </div>

                </div>
                <div className="coupon-generation-page-body-box extra2">
                    <div className="coupon-generation-page-option">
                        <p className="option-label">Coupon Description</p>
                        <div className="options-textbox">
                            <CKEditor
                                name="couponDescription"
                                data="<p>Hello from the first editor working with the context!</p>"
                                initData={watch("couponDescription")}
                                onChange={(e: any) => setValue("couponDescription", String(e.editor.getData()))}
                            />
                        </div>
                    </div>
                </div>
                <ActionButton variant="primary" name="Continue" />
            </form>
        </div>
    )
}