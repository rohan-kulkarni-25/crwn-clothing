import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
  const { cartItem } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItem.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
