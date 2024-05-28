import React from "react";
import "./styles.scss"


type TextBoxProps = {
    label?: string,
    register?: any,
    error?: boolean
    errorText?: string
} & React.InputHTMLAttributes<HTMLInputElement>


export const TextBox: React.FC<TextBoxProps> = ({ label, register, errorText, error, ...props }) => {
    
    return (
        <div className="inputWrap">
            {label && <label>{label}</label>}
            <input ref={register}{...props} {...register} />
            {error && <p className="error">{errorText}</p>}
        </div>
    )
}