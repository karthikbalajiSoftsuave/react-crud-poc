import React from "react";
import PoorvikaLogo from "../../assets/icons/poorvika_logo.svg"
// import PoorvikaIcon from "../../assets/icons/Icon.svg"
import DashboardActive from "../../assets/icons/dashboard-active.svg"
import DashboardInactive from "../../assets/icons/dashboard-inactive.svg"
import CouponsActive from "../../assets/icons/coupons-active.svg"
import CouponsInactive from "../../assets/icons/coupons-inactive.svg"
import ReportsActive from "../../assets/icons/reports-active.svg"
import ReportsInactive from "../../assets/icons/reports-inactive.svg"
import HistoryActive from "../../assets/icons/history-active.svg"
import HistoryInactive from "../../assets/icons/history-inactive.svg"


import "./styles.scss"
import { SideMenuItem } from "../../components/SideMenuItem";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../redux/Actions/actions";

type Tprops = {

}

export const Sidebar: React.FC<Tprops> = () => {
    const dispatch = useDispatch()
    return (
        <section className="headerCon">
            <div className="menu-header">
                {/* <img className="menu-logo" alt="logo" draggable="false" src={PoorvikaIcon} /> */}
                <img className="menu-color-logo" alt="menu-logo" draggable="false" src={PoorvikaLogo} />
            </div>
            <div className="menu-body">
                <div className="menu-list">
                    <>
                        <SideMenuItem
                            label="Dashboard"
                            path="/coupon-code/dashboard"
                            activeIcon={DashboardActive}
                            inActiveIcon={DashboardInactive}
                        />
                        <SideMenuItem
                            label="Coupons"
                            path="/coupon-code/coupons"
                            activeIcon={CouponsActive}
                            inActiveIcon={CouponsInactive}
                        />
                        <SideMenuItem
                            label="Reports"
                            path="/coupon-code/reports"
                            activeIcon={ReportsActive}
                            inActiveIcon={ReportsInactive}
                        />
                        <SideMenuItem
                            label="History"
                            path="/coupon-code/history"
                            activeIcon={HistoryActive}
                            inActiveIcon={HistoryInactive}
                        />
                        <div className="logOut">
                            <SideMenuItem
                                label="Sign out"
                                path="/coupon-code/dashboard"
                                activeIcon={DashboardActive}
                                inActiveIcon={DashboardInactive}
                                onClick={()=>dispatch(setUserDetails(undefined))}
                            />
                        </div>
                    </>
                </div>
            </div>

        </section>
    )
}