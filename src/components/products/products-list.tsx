import Good from '../good/good';
import {Products} from '../../types/mock-types';
import './product-list.css';
import ReturnButton from '../return-button/return-button';

type productsProps = {
  goods: Products;
}

export default function ProductsList({goods}: productsProps) {
  return (
    <div className="container">
      <ul className="product-list">
        {goods
          .filter((item) => item.type !== 'promo')
          .map((item) => (
            <Good item={item} key={item.id} />
          ))}
      </ul>
      <ReturnButton />
    </div>
  );
}
