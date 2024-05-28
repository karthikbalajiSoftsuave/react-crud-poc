import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss"

type Tprops = {
    label: string
    onClick?: () => void
    path: string
    inActiveIcon?: any
    activeIcon?: string
    disabled?: string
}


export const SideMenuItem: React.FC<Tprops> = ({ inActiveIcon, activeIcon, path, label, disabled, onClick }) => {

    return (
        <div className="side-menu-item" >
            <NavLink className={disabled ? "menu-link disabled-link" : "menu-link"} to={path} onClick={onClick}>
                <div className='menu-ic'>
                    <img className='menu-img' alt="Poorvika" src={inActiveIcon} />
                    <img className='menu-color-img' alt='Poorvika' src={activeIcon} />
                </div>
                <div className="menu-title">
                    {label}
                </div>
            </NavLink>
        </div>
    )
}