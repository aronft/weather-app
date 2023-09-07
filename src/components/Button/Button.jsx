import './_button.scss'

import React from 'react'

export const Button = ({ className, children, onClick, disabled }) => {
    return (
        <button
            disabled={disabled}
            className={`${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
