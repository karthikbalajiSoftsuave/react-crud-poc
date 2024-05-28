import React from "react";
import "./styles.scss"

type Tprops = {
    variant?: "primary" | "secondary"
    name: string,
    onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const ActionButton: React.FC<Tprops> = ({ name, variant, onClick, ...props }) => {
    return (
        <button className={variant} onClick={onClick} {...props}>{name}</button>
    )
}