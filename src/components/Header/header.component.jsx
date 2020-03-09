import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import ShoppingCart from '../ShoppingCart/ShoppingCart.component';
import CartDropdown from '../Cart-dropdown/cart-dropdown.component';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectHidden} from '../../Redux/cart/cart.selector';
import {selectCurrentUser} from '../../Redux/user/user.selectors';
import './header.styles.scss';

const Header = ({currentState,hidden})=> (
   <div className="header">
        <Link to="/" className="logo-container">
           <Logo className="logo"></Logo>
        </Link>
        <div className="options">
           <Link to="/shop" className="option">Shop</Link>
           <Link to="/shop" className="option">Contact</Link>
           {
             currentState?
             (<div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>)
             :(<Link to="/sign" className="option">SIGN IN</Link>)
           }
           <ShoppingCart/>
        </div>
        {
           hidden? null :
           <CartDropdown/>
        }
        
   </div>
);
const mapStatetoProps = createStructuredSelector({
   currentState: selectCurrentUser,
   hidden: selectHidden
})
export default connect(mapStatetoProps)(Header);