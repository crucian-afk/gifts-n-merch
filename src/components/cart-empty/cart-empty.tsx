import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

export default function CartEmpty() {
  return (
    <div className="container">
      <h2>В корзине нет ничего</h2>
      <Link className="ant-btn ant-btn-primary product__link-button" to={AppRoute.Root}>Отправиться за покупками</Link>
    </div>
  );
}
