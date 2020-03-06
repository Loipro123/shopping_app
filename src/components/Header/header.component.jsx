import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({currentUser})=> (
   <div className="header">
        <Link to="/" className="logo-container">
           <Logo className="logo"></Logo>
        </Link>
        <div className="options">
           <Link to="/shop" className="option">Shop</Link>
           <Link to="/shop" className="option">Contact</Link>
           {
             currentUser?
             (<div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>)
             :(<Link to="/sign" className="option">SIGN IN</Link>)
           }
        </div>
   </div>
);

export default Header;