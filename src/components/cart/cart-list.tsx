import './cart-list.css';
import CartItem from '../cart-item/cart-item';
import CartEmpty from '../cart-empty/cart-empty';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {addProduct, deleteProduct, reduceProduct} from '../../store/cart/cart-slice';
import {Product} from '../../types/mock-types';
import {useSelector} from 'react-redux';
import {cartTotalPriceSelector} from '../../store/selectors/selectors';

export default function CartList() {
  const dispatch = useAppDispatch();
  const handleAddProduct = (item: Product) => {
    dispatch(addProduct(item));
  };
  const handleReduceProduct = (item: Product) => {
    dispatch(reduceProduct(item));
  };
  const handleDeleteProduct = (item: Product) => {
    dispatch(deleteProduct(item));
  };
  const goods = useAppSelector((state) => state.products.cartItems);
  const totalPrice = useSelector(cartTotalPriceSelector);

  if (goods.length) {
    return (
      <div className="cart-list container">
        <div className="cart-items">
          {goods.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              addHandler={() => handleAddProduct(item)}
              reduceHandler={() => handleReduceProduct(item)}
              deleteHandler={() => handleDeleteProduct(item)}
              quantity={item.cartQuantity}
            />
          ))}
        </div>
        <div className="cart-total">
          <p>Всего элементов</p>
          <p>Общая сумма: {totalPrice}</p>
          <button>Оформить заказ</button>
        </div>
      </div>
    );
  }
  return <CartEmpty />;
}
