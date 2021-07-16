import React from 'react';
import './Input.css';
const Input = (props) => {
    const {size = 'medium',children,  ...rest} = props
    return (
        <div>
            <input className={`input ${size}`} {...rest}>
                {children}
            </input>
        </div>
    );
};

export default Input;