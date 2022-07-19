import {Product} from '../../types/mock-types';
import {generatePath, Link} from 'react-router-dom';
import {Button} from 'antd';
import {useAppDispatch} from '../../hooks';
import {addProduct} from '../../store/cart/cart-slice';

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
      <div className="goods-info">
        <p>{name}</p>
        <span>Цвет: {color}</span>
        <span>Размер: {size}</span>
        <p>&#8381; {price}</p>
        <p>type {type}</p>
      </div>
      <Link className="product__link" to={generatePath(`/good/${type}/:id`, {id: String(id)})}>
        <Button className="product__link-button" type="primary">Подробнее</Button>
      </Link>
      <Button className="product__link-button" type="primary" onClick={handleClick}>Добавить в корзину</Button>
    </li>
  );
}
