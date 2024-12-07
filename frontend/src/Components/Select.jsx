import React from 'react'

const Select = ({ children,title, onChange }) => {
    return (
        <label htmlFor="">
            <h1>{title}</h1>
            <select onChange={onChange}>
                {children}
            </select>
        </label>
    )
}

export const Option = ({ children, value }) => {
    return (
        <option value={value}>
            {children}
        </option>
    )
}

export default Select