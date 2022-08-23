import {Link, NavLink, Outlet} from 'react-router-dom';
import {AppRoute} from '../../const';
import './layout.css';
import {useAppSelector} from '../../hooks';
import {cartTotalSelector} from '../../store/selectors/selectors';
import {Badge} from 'antd';
// import Logo from '../../../public/img/logo.svg';
// import {ReactC}
export default function Layout() {
  const {Products, UnderConstruction, Cart} = AppRoute;
  const totalInCart = useAppSelector(cartTotalSelector);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-top">
            <div className="logo">
              <img src="./img/logo.svg" alt="Логотип" />
            </div>
            <a className="green-button" href="tel:+380630130103">+380 630 130 103</a>
          </div>
        </div>
        <div className="header__links">
          <div className="container">
            <NavLink className="header__link header__link--disabled" to={UnderConstruction}>Наборы</NavLink>
            <Link className="header__link" to={Products}>Каталог</Link>
            <NavLink className="header__link header__link--disabled" to={UnderConstruction}>Пошив</NavLink>
            <NavLink className="header__link header__link--disabled" to={UnderConstruction}>Производство</NavLink>
            <NavLink className="header__link header__link--disabled" to={UnderConstruction}>Информация</NavLink>
            <NavLink className="header__link header__link--right" to={Cart}><Badge count={totalInCart}>Корзина</Badge></NavLink>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
