import {Link, NavLink, Outlet} from 'react-router-dom';
import {AppRoute} from '../../const';
import './layout.css';
import {useAppSelector} from '../../hooks';
import {cartTotalSelector} from '../../store/selectors/selectors';
import {Badge} from 'antd';
import {handleSubmit} from '../utils/utils';
export default function Layout() {
  const {Products, UnderConstruction, Cart} = AppRoute;
  const totalInCart = useAppSelector(cartTotalSelector);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-top">
            <div className="logo">
              <img className="logo-image" src="/img/logo.svg" alt="Логотип" />
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
      <footer className="footer">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="background-curve" viewBox="0 0 1000.000000 50.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="none" stroke="none">
            <path d="M150 469 c664 -167 1814 -317 2940 -384 415 -24 436 -25 900 -40
1567 -52 3299 22 4600 196 502 66 1103 175 1345 243 43 12 -643 14 -4925 14
l-4975 0 115 -29z" fill="#FFFFFF"
            />
          </g>
        </svg>
        <div className="container footer__layout">
          <div className="footer__bottom">
            <img className="logo-image" src="/img/logo.svg" alt="Логотип gifts &amp; merch"/>
            <p className="footer__slogan">Свежее дыхание в корпоративной жизни</p>
            <p className="footer__phone">+380 630 130 103</p>
            <p className="footer__email">example@gmail.com</p>
          </div>
          <div className="footer_categories">
            <h3>Категории</h3>
            <p>Пошив</p>
            <p>Все товары</p>
            <p>Наборы</p>
            <p>Производство</p>
          </div>
          <div className="footer__info">
            <h3>Информация</h3>
            <p>О нас</p>
            <p>ЧаВо</p>
            <p>Контакты</p>
          </div>
          <div className="footer__contact-form">
            <h3>Связаться с менеджером</h3>
            <p>Есть вопрос на который не нашли ответ? Оставьте контакт, и наш менеджер свяжется с вами</p>
            <form className="footer__contact-form" onSubmit={handleSubmit}>
              <input className="footer__contact-input" type="tel" placeholder="Номер телефона" required />
              <button className="footer__submit-button" type="submit"><span className="visually-hidden">Отправить запрос за звонок</span></button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}
