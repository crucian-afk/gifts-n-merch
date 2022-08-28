import {Link} from 'react-router-dom';
import {handleSubmit} from '../utils/utils';
import {AppRoute} from '../../const';

export function Footer () {
  return (
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
          <Link to={AppRoute.Root}>
            <img className="logo-image" src="/img/logo.svg" alt="Логотип gifts &amp; merch" />
          </Link>
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
  );
}
