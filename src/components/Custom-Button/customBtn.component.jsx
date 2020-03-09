import React from 'react';
import './customBtn.styles.scss';

const CustomBtn = ({children,isGoogleSignIn,inverted,...otherProps}) => (
   <button className={`${inverted ? 'inverted':''} ${isGoogleSignIn ? 'isgoogle':''} custom-button`} {...otherProps}>
       {children}
   </button>
);

export default CustomBtn;