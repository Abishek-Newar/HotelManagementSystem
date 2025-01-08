import React from 'react'

const Select = ({ children,title, onChange }) => {
    return (
        <label htmlFor="">
            <h1>{title}</h1>
            <select className='w-full h-10 border text-center' onChange={onChange}>
                {children}
            </select>
        </label>
    )
}

export const Option = ({ children, value }) => {
    return (
        <option className='' value={value}>
            {children}
        </option>
    )
}

export default Select