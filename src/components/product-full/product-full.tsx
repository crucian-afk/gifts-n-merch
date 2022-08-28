import {useParams} from 'react-router-dom';
import {Product, Products} from '../../types/mock-types';
import './product-full.css';
import {Button, Rate} from 'antd';
import {useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {addProduct} from '../../store/cart/cart-slice';
import {colorIcon} from '../utils/utils';

type paramsProps = {
  id: string;
}

type productFullProps = {
  products: Products;
}

export default function ProductFull({products}: productFullProps) {
  const dispatch = useAppDispatch();
  const handleCartClick = (item: Product) => {
    dispatch(addProduct(item));
  };


  const params: paramsProps = useParams() as paramsProps;
  const currentId = Number(params.id);
  const currentIndex = products.findIndex((product) => product.id === currentId);
  const currentProduct = products[currentIndex];
  const newProducts = products.slice();
  newProducts.splice(currentIndex, 1);
  const {id, price, size, color, name, fabric, type, description, shortName} = currentProduct;
  const [rateValue, setRateValue] = useState(3);
  const desc = ['ужас', 'плохо', 'средне', 'неплохо', 'отлично'];

  return (
    <div className="container product__info">
      <div className="photo">
        <img src={`/img/${type}_${id}.jpg`} alt={`${color} ${shortName}`} width={180} height="auto" />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <p>Цвет: <span style={colorIcon(color)} /></p>
        <span className="cart-item__size" aria-label="размер" title="размер">{size}</span>
        <p className="product__price">&#8381; {price}</p>
        <span>{size}</span>
        <span>Состав: {fabric}</span>
        <p>{description}</p>
        <Rate tooltips={desc} onChange={setRateValue} value={rateValue} />
        {rateValue && <span className="ant-rate-text">{desc[rateValue - 1]}</span>}
      </div>
      <Button type="primary" onClick={() => handleCartClick(currentProduct)}>Добавить в корзину</Button>
    </div>
  );
}
