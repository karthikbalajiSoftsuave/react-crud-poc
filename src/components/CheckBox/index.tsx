import React from "react";
import "./styles.scss"

type Tprops = {
    label?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const CheckBox: React.FC<Tprops> = ({ label, ...props }) => {
    return (
        <div className="checkInput">
            <input type="checkbox" {...props} />
            <label htmlFor="">{label}</label>
        </div>
    )
}