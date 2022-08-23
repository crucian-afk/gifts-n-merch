import {Product} from '../../types/mock-types';
import {generatePath, Link} from 'react-router-dom';
import './promo-item.css';
import {colorIcon} from '../utils/utils';

type productProps = {
  item: Product;
}

export default function PromoItem({item}: productProps): JSX.Element {
  const {id, name, price, size, color, type, shortName} = item;

  return (
    <li className="promo__item">
      <Link className="product__link" to={generatePath(`/good/${type}/:id`, {id: String(id)})}>
        <img src={`./img/${type}_${id}.jpg`} alt={shortName} />
        <div className="goods-info">
          <p>{name}</p>
          <p>Цвет: <span style={colorIcon(color)} /></p>
          <span className="cart-item__size" aria-label="размер" title="размер">{size}</span>
          <p>&#8381; {price}</p>
        </div>
      </Link>
    </li>
  );
}
