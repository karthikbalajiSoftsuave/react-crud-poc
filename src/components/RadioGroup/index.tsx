import React, { useEffect, useState } from "react";
import "./styles.scss"

type Tprops = {
    register?: any,
    options: string[]
    formValue: (value: string) => void,
    defaultValue?: string

} & React.InputHTMLAttributes<HTMLInputElement>

export const RadioGroup: React.FC<Tprops> = ({ register, formValue, options, defaultValue, ...props }) => {
    const [selectedValue, setSelectedValue] = useState<string>(defaultValue ?? "")

    const handleOnChange = (value: string) => {
        setSelectedValue(value)
        formValue(value)
    }
    useEffect(() => {
        setSelectedValue(defaultValue ?? "")
    }, [defaultValue])

    return (
        <div className="options-radio" {...register} onChange={(e: any) => handleOnChange(e.target.value)}>
            {options.map((data: string) => <label className="radioButton">
                <input
                    type="radio"
                    value={data}
                    checked={selectedValue === data ? true : false}
                    data-checked={selectedValue === data ? true : false}
                    {...props}
                />
                <p>{data}</p>
            </label>)}
        </div>
    )
}