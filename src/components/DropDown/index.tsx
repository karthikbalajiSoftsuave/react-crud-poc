import React from "react"
import './styles.scss'

type SelectProps = {
    label?: string,
    formValues?: any,
    placeHolder?: string,
    options: string[] | any[]
    optionLabel?: string,
    optionValue?: string
} & React.SelectHTMLAttributes<HTMLSelectElement>


export const DropDown: React.FC<SelectProps> = ({ label, options, optionLabel, optionValue, formValues, ...props }) => {

    return (
        <div className="dropDown">
            {label && <label>{label}</label>}
            <select {...props} {...formValues}>
                {options?.map((data: any, index: number) => <option value={optionValue ? data[optionValue] : data} key={index}>{optionLabel ? data[optionLabel] : data}</option>)}
            </select>
        </div>
    )
}