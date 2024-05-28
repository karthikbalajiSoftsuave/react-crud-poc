/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { TextBox } from "../../../components/TextBox";
import SortIcon from "../../../assets/icons/sort-icon.svg"
import "./styles.scss"
import { showNotification, STATUS } from "../../../common/constants";
import { CouponService } from "../../../services/classService/couponService";
import EditIcon from "../../../assets/icons/edit-styles.svg"
import DeleteIcon from "../../../assets/icons/delete-icon.svg"
import SearchIcon from "../../../assets/icons/search-icon.svg"
import { ActionButton } from "../../../components/ActionButton";
import { useNavigate } from "react-router-dom";
import moment from "moment"
import { useDispatch } from "react-redux";
import { setCouponDetails } from "../../../redux/Actions/actions";


type Tprops = {

}

export const CouponList: React.FC<Tprops> = () => {

    const [allCoupons, setAllCoupons] = useState<any[]>([])
    const router = useNavigate()
    const couponService = new CouponService()
    const [searchText, setSearchText] = useState<string>("")
    const dispatch = useDispatch()

    const fetchAllCoupon = async (searchText: string) => {
        try {
            const getCoupon = await couponService.ViewAllCoupon(searchText)
            if (getCoupon.status === STATUS.SUCCESS) {
                setAllCoupons(getCoupon.data)
            }
        }
        catch (err: any) {
            showNotification(STATUS.FAILURE, err.message)
        }
    }

    const deleteCoupon = async (id: string | number) => {
        try {
            const deleteCoupon = await couponService.DeleteCoupon(id)
            if (deleteCoupon.status === STATUS.SUCCESS) {
                showNotification(STATUS.SUCCESS, deleteCoupon.message)
                fetchAllCoupon(searchText)
            }
            else {
                showNotification(STATUS.FAILURE, deleteCoupon.message)
            }
        }
        catch (err: any) {
            showNotification(STATUS.FAILURE, err.message)
        }
    }

    const couponEdit = async (data: any) => {
        try {
            dispatch(setCouponDetails(data))
            router("")
        }
        catch (err: any) {
            showNotification(STATUS.FAILURE, err.message)
        }
    }

    useEffect(() => {
        fetchAllCoupon(searchText)
    }, [searchText])

    return (
        <div className="couponList">
            <div className="title">
                <h1>Coupon List</h1>
                <ActionButton variant="primary" name="Add New Coupon" onClick={() => router("/coupon-code/coupons/addCoupons")} />
            </div>
            <div className="tableContainer">
                <div className="header-container">
                    <div className="inputCon">
                        <TextBox placeholder="Search coupon code" onChange={(e: any) => setSearchText(e.target.value)} />
                        <img src={SearchIcon} alt="" width={"20px"} height={"20px"} />
                    </div>
                    {/* <img src={SortIcon} alt="Sort icon" draggable="false" height={"36px"} width={"36px"} /> */}
                </div>
                <div className="table-container">
                    <table className="custTable">
                        <thead>
                            <tr>
                                <th>Coupon Code</th>
                                <th>Claim Variant</th>
                                <th>Amount</th>
                                <th>Discount Type</th>
                                <th>Start Date</th>
                                <th>Expiry</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allCoupons?.map((data, index: number) => <tr key={index}>
                                <td className="coupon"><p>{data?.couponCode}</p></td>
                                <td>{data?.claimVariant}</td>
                                <td>{data?.discountDetails?.amount}</td>
                                <td>{data?.discountType}</td>
                                <td>{moment(new Date(data?.validityDetails?.from)).format("MMM D, YYYY")}</td>
                                <td>{moment(new Date(data?.validityDetails?.to)).format("MMM D, YYYY")}</td>
                                <td><div className="actionIcons">
                                    {/* <img src={EditIcon} alt="" width={"24px"} height={"24px"} onClick={() => couponEdit(data)} /> */}
                                    <img src={DeleteIcon} alt="" width={"24px"} height={"24px"} onClick={() => deleteCoupon(data?.id)} />
                                    </div></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}