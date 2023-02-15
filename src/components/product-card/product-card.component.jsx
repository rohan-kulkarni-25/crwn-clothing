import Button from "../button/button.component";
import "./product-card.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

//
const ProductCard = ({ product, key }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className='product-card-container' key={key}>
      <img src={imageUrl} alt='img' />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        <Button buttonType='inverted' onClick={addProductToCart}>
          Add to card
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
