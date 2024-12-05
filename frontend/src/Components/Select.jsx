import React from 'react'

const Select = ({ children,title }) => {
    return (
        <label htmlFor="">
            <h1>{title}</h1>
            <select>
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