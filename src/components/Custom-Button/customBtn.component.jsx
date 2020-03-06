import React from 'react';
import './customBtn.styles.scss';

const CustomBtn = ({children,isGoogleSignIn,...otherProps}) => (
   <button className={`${isGoogleSignIn ? 'isgoogle':''} custom-button`} {...otherProps}>
       {children}
   </button>
);

export default CustomBtn;