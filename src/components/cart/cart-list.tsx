import {store} from '../../store';
import './cart-list.css';
import CartItem from '../cart-item/cart-item';
import CartEmpty from '../cart-empty/cart-empty';

export default function CartList() {
  const goods = store.getState().products.cartItems;
  if (goods.length) {
    return (
      <div className="cart-list container">
        {goods.map((item) => (
          <CartItem key={item.id} product={item}/>
        ))}
      </div>
    );
  }
  return <CartEmpty />;
}
