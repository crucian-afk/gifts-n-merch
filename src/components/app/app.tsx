import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '../not-found/not-found';
import {AppRoute} from '../../const';
import {goods} from '../../mocks/mock-data';
import './App.css';
import ProductFull from '../product-full/product-full';
import ProductsList from '../products/products-list';
import PromoProducts from '../promo-products/promo-products';
import NotReadyYet from '../not-ready-yet/not-ready-yet';
import CartList from '../cart/cart-list';
import Layout from '../layout/layout';
import {Provider} from 'react-redux';
import {store} from '../../store';

export default function App(): JSX.Element {
  const {Root, Products, Product, UnderConstruction, Cart} = AppRoute;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={Root} element={<Layout />}>
            <Route index element={<PromoProducts goods={goods} type="promo" />} />
            <Route path={Products} element={<ProductsList goods={goods} />} />
            <Route path={Product} element={<ProductFull products={goods} />} />
            <Route path={UnderConstruction} element={<NotReadyYet />} />
            <Route path={Cart} element={<CartList />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
