import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
// import "./navigation.styles.scss";

import { ReactComponent as CrwnLogo } from "./../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import {
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <NavLink to='/'>
          <CrwnLogo />
        </NavLink>
        <NavLinksContainer>
          <NavLink to='/shop'>Shop</NavLink>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <NavLink to='/sign-in'>Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
      </NavigationContainer>
      {isCartOpen ? <CartDropdown /> : ""}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
