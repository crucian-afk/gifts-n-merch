import {Product} from '../../types/mock-types';
import {ProductType} from '../../const';
import './cart-item.css';
import {generatePath, Link} from 'react-router-dom';


type CartItemProps = {
  product: Product & { cartQuantity: number };
  addHandler: () => void;
  reduceHandler: () => void;
  deleteHandler: () => void;
  quantity: number;
}

export default function CartItem({product, addHandler, reduceHandler, deleteHandler, quantity}: CartItemProps) {
  const {type, description, shortName, name, price, size, color, id, fabric} = product;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const productName: string = ProductType[shortName];
  return (
    <div key={product.id} className="cart-item">
      <div className="cart-item__info">
        <Link className="cart-item__link" to={generatePath(`/good/${type}/:id`, {id: String(id)})}>
          <img className="cart-item__image" src={`./img/${type}_${id}.jpg`} alt={`${color} ${shortName}`} />
        </Link>
        {type === 'promo' && <p className="cart-item__promo">Промо-товар</p>}
        <div className="cart-item__specs">
          <p>desc: {description}</p>
          <p>{productName}</p>
          <Link to={generatePath(`/good/${type}/:id`, {id: String(id)})}>{name}</Link>

          <p>size {size}</p>
          <p>color {color}</p>
          <p>id {id}</p>
          <p>fabric {fabric}</p>
        </div>
      </div>
      <div className="cart-item__controls">
        <button className="cart-item__button" onClick={addHandler}>+</button>
        <span>count: {quantity}</span>
        <button className="cart-item__button" onClick={quantity === 1 ? deleteHandler : reduceHandler}>{quantity === 1 ? 'Удалить' : '-'}</button>
      </div>
      <p className="cart-item__price">price: {quantity > 0 ? price * quantity : 0}</p>
    </div>
  );
}

