import './_button.scss'

import React from 'react'

export const Button = ({
    className,
    children,
    onClick,
    disabled,
    ...props
}) => {
    return (
        <button
            disabled={disabled}
            className={`${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}
