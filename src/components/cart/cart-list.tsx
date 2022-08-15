import './cart-list.css';
import CartItem from '../cart-item/cart-item';
import CartEmpty from '../cart-empty/cart-empty';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {addProduct, deleteProduct, reduceProduct} from '../../store/cart/cart-slice';
import {Product} from '../../types/mock-types';
import {useSelector} from 'react-redux';
import {cartTotalPriceSelector} from '../../store/selectors/selectors';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

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
          <Link className="ant-btn ant-btn-default" to={AppRoute.Order}>Перейти к оформлению</Link>
        </div>
      </div>
    );
  }
  return <CartEmpty />;
}
