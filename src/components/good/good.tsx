import {Product} from '../../types/mock-types';
import {generatePath, Link} from 'react-router-dom';
import {Button} from 'antd';
import {useAppDispatch} from '../../hooks';
import {addProduct} from '../../store/cart/cart-slice';
import './good.css';
import {colorIcon} from '../utils/utils';

type productProps = {
  item: Product;
}

export default function Good({item}: productProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(addProduct(item));
  };
  const {id, name, price, size, color, type, shortName} = item;
  return (
    <li className="product__item card">
      <Link className="product__link" to={generatePath(`/good/${type}/:id`, {id: String(id)})}>
        <img src={`./img/${type}_${id}.jpg`} alt={shortName} />
      </Link>
      <div className="product__card-info">
        <p>{name}</p>
        <p>Цвет: <span style={colorIcon(color)} /></p>
        <span className="cart-item__size" aria-label="размер" title="размер">{size}</span>
        <p className="product__price">&#8381; {price}</p>
      </div>
      <Button className="product__link-button" type="primary" onClick={handleClick}>Добавить в корзину</Button>
    </li>
  );
}
