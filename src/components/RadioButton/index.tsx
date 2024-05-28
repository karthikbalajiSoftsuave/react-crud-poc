import React from "react";
import './styles.scss'

type RadioButtonProps = {
    label: string,
    value: string,
    register?: any
} & React.InputHTMLAttributes<HTMLInputElement>

export const RadioButton: React.FC<RadioButtonProps> = ({ label, value, checked, register, onChange, ...props }) => {
    return (
        <label className="radioButton">
            <input
                type="radio"
                value={value}
                onChange={onChange}
                checked={checked}
                data-checked={checked}
                {...props}
            />
            <p>{label}</p>
        </label>
    );
}