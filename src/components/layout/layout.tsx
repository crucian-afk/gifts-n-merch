import {Link, NavLink, Outlet} from 'react-router-dom';
import {AppRoute} from '../../const';
import './layout.css';
import {useAppSelector} from '../../hooks';
import {cartTotalSelector} from '../../store/selectors/selectors';

export default function Layout() {
  const {Products, UnderConstruction, Cart} = AppRoute;
  const totalInCart = useAppSelector(cartTotalSelector);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__links">
            <NavLink className="header__link header__link--disabled" to={UnderConstruction}>Наборы</NavLink>
            <Link className="header__link" to={Products}>Каталог</Link>
            <NavLink className="header__link header__link--disabled" to={UnderConstruction}>Пошив</NavLink>
            <NavLink className="header__link header__link--disabled" to={UnderConstruction}>Производство</NavLink>
            <NavLink className="header__link header__link--disabled" to={UnderConstruction}>Информация</NavLink>
            <NavLink className="header__link header__link--right" to={Cart}>Корзина ({totalInCart})</NavLink>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
