import React from 'react';
import './custom-button.scss';

export const Button = ({
    children,
    onClick,
    disabled = false,
    style = {}
}) => {
    return (
        <button
            className='custom-button'
            onClick={onClick}
            disabled={disabled}
            style={style}
        >
            {children}
        </button>
    )
}