import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss"

type Tprops = {
    name: string,
    img: any,
    path: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const MenuButton: React.FC<Tprops> = ({ img, name, path }) => {
    return (
        <div className="btn">
            <NavLink className="inventorys-selector" to={path}>
                <div className="header-btn">
                    <img src={img} alt=""/>
                    <div className="header-label">{name}</div>
                </div>
            </NavLink>
        </div>
    )
}