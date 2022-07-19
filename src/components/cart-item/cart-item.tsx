import {Product} from '../../types/mock-types';
// import {useAppSelector} from '../../hooks';

type CartItemProps = {
  product: Product;
}

export default function CartItem({product}: CartItemProps) {
  const {type, description, shortName, name, price, size, color, id, fabric} = product;
  // const cartQuantity = useAppSelector(state => state.products.cartItems)
  return (
    <div key={product.id} className="cart-item">
      <p>type: {type}</p>
      <p>desc: {description}</p>
      <p>name: {shortName}</p>
      <p>fullName: {name}</p>
      <p>price: {price}</p>
      <p>size {size}</p>
      <p>color {color}</p>
      {/*<p>cartQuantity {cartQuantity}</p>*/}
      <p>id {id}</p>
      <p>fabric {fabric}</p>
    </div>
  );
}
