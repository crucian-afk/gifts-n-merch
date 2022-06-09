import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '../not-found/not-found';
import {AppRoute} from '../../const';
import {goods, users} from '../../mocks/mock-data';
import UserFull from '../user-full/user-full';
import './App.css';
import ProductFull from '../products-container/product-full';
import ProductsList from '../products/products-list';
import PromoProducts from '../promo-products/promo-products';
import NotReadyYet from '../not-ready-yet/not-ready-yet';
import Cart from '../cart/cart';
import Layout from '../layout/layout';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index element={<PromoProducts goods={goods} type="promo" />} />
          <Route path={AppRoute.Products} element={<ProductsList goods={goods} />} />
          <Route path={AppRoute.Person} element={<UserFull users={users} />} />
          <Route path={AppRoute.Product} element={<ProductFull products={goods} />} />
          <Route path={AppRoute.UnderConstruction} element={<NotReadyYet />} />
          <Route path={AppRoute.Cart} element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
