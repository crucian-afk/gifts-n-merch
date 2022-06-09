import {Products} from '../../types/mock-types';
import Good from '../good/good';
import './promo-products.css';

type promoProps = {
  goods: Products;
  type: string;
}

export default function PromoProducts({goods, type = 'promo'}: promoProps): JSX.Element {
  const filteredGoods = goods.filter((item) => item.type === 'promo');
  return (
    <div className="container">
      <h1 className="promo__title">Самое популярное</h1>
      <ul className="promo-list">
        {filteredGoods.map((good) => (
          <Good item={good} key={good.id} />
        ))}
      </ul>
    </div>
  );
}
// TODO доделать верстку главной
// <section className="merch"><img src="./img/" alt="Пример мерча"/>
//   <div className="merch-description">
//     <h2 className="merch-title">Помимо готовой продукции высокого качества, мы можем для Вас произвести одежду,
//       аксессуры, вкусности и другое под заказ.</h2>
//     <p className="merch-description">Благодаря личному производству мы изготавливаем большие партии в короткие сроки, а
//       так же у Вас всегда есть возможность кастомизировать изделия.</p>
//     <div className="merch-slider">
//       <div className="merch-slider-element"><img src="./img/" alt="Элемент слайдера"/></div>
//     </div>
//   </div>
// </section>
// <section className="contact-us">
//   <form className="merch-form">
//     <h2 className="merch-form__title">У вас своя уникальная идея по разработке мерча?</h2>
//     <p className="merch-form__description">Изготовим мерч по вашему дизайну. Расскажем лайфхаки и ознакомим с
//       технологией производства, предоставим образцы матералов. </p>
//     <p className="merch-form__text">Введите свои контактные данные, и наш менеджер свяжется с Вами в течении 1 часа</p>
//     <label className="merch-form__label">
//       <input className="merch-form__input" type="text" placeholder="Ваше имя"/>
//     </label>
//     <label className="merch-form__label">
//       <input className="merch-form__input" type="text" placeholder="Ваша электронная почта"/>
//     </label>
//     <label className="merch-form__label">
//       <input className="merch-form__input" type="text" placeholder="Ваш номер телефона"/>
//     </label>
//     <button className="order-button" type="submit">Заказать</button>
//   </form>
// </section>
// <section className="partners">
//   <div className="partners-slider">
//     <ul className="partners-list">
//       <li className="partners-element"><span className="visually-hidden">Компания "Кока-кола"</span></li>
//     </ul>
//   </div>
// </section>
// <footer className="footer"><img className="logo" src="./img/icons/logo.svg" alt="Логотип gifts &amp; merch"/>
//   <p className="footer__slogan">Свежее дыхание в корпоративной жизни и жизни корпоративной дыхание свежее </p>
// </footer>
