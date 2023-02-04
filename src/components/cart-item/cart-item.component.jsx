import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const { name, quantity, imageUrl, price } = item;
  console.log(item);
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt='' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <spam className='price'>{price}</spam>
      </div>
    </div>
  );
};

export default CartItem;
