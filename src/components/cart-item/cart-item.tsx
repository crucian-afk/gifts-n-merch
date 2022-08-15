import {Product} from '../../types/mock-types';
import {ProductType} from '../../const';
import './cart-item.css';
import {generatePath, Link} from 'react-router-dom';
import {Button} from 'antd';
import {PlusOutlined, MinusOutlined, DeleteOutlined} from '@ant-design/icons';

type CartItemProps = {
  product: Product & { cartQuantity: number };
  addHandler: () => void;
  reduceHandler: () => void;
  deleteHandler: () => void;
  quantity: number;
}

export default function CartItem({product, addHandler, reduceHandler, deleteHandler, quantity}: CartItemProps) {
  const {type, description, shortName, name, price, size, color, id, fabric} = product;
  const style = {
    backgroundColor: color.split('/')[0],
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    display: 'inline-block',
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const productName: string = ProductType[shortName];
  return (
    <div className="cart-content">
      <p className="cart__item-id">Артикул 0000{id}</p>
      <div key={product.id} className="cart-item">
        <div className="cart-item__info">
          <Link className="cart-item__link" to={generatePath(`/good/${type}/:id`, {id: String(id)})}>
            <img className="cart-item__image" src={`./img/${type}_${id}.jpg`} alt={`${color} ${shortName}`} />
          </Link>
          {type === 'promo' && <p className="cart-item__promo">Промо-товар</p>}
          <div className="cart-item__specs">
            <Link className="cart-item__link" to={generatePath(`/good/${type}/:id`, {id: String(id)})}>{productName} {name}</Link>
            <span className="cart-item__size" aria-label="размер" title="размер">{size}</span>
            <p>Цвет: <span style={style} /></p>
            <p>Состав: {fabric}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="cart-item__controls">

          <Button icon={<PlusOutlined />} className="cart-item__button" onClick={addHandler} />
          <span className="cart-item__quantity">{quantity}</span>
          <Button className="cart-item__button" onClick={quantity === 1 ? deleteHandler : reduceHandler} icon={quantity === 1 ? <DeleteOutlined/> : <MinusOutlined/>} />
        </div>
        <p className="cart-item__price">{quantity > 0 ? price * quantity : 0} ₽</p>
      </div>
    </div>
  );
}

