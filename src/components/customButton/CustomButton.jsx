import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignin, ...props}) => {
    return (
        <button className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...props}>
            {children}
        </button>
    )
}

export default CustomButton
