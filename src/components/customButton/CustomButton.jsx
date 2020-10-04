import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignin, inverted, ...props}) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} 
                            ${isGoogleSignin ? 'google-sign-in' : ''} 
                            custom-button`} 
                {...props} >
            {children}
        </button>
    )
}

export default CustomButton
