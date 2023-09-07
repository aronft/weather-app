import './_button.scss'

import React from 'react'

export const Button = ({ className, children, onClick, disabled }) => {
    return (
        <button
            className={`${className} ${disabled ? 'btn--disabled' : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
