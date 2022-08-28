import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import PromoItem from '../promo-item/promo-item';
import {Products} from '../../types/mock-types';
import {handleSubmit} from '../utils/utils';
import {Carousel} from 'antd';

export function SectionPromo () {
  return (
    <section className="promo">
      <div className="container">
        <h1 className="visually-hidden">Магазин подарков Гифтс энд мерч</h1>
        <p className="promo__large-text">Свежее дыхание в корпоративной жизни</p>
        <p className="promo__under-large">Мы усовершенствовали процесс заказа продукции для того, чтобы вы и ваша компания сконцентрировались на основных задачах и достигали поставленных целей.</p>
        <div className="promo__features">
          <div className="promo__feature">Высокое качество <b>ONLY</b></div>
          <div className="promo__feature">Поддержка менеджера <b>24/7</b></div>
          <div className="promo__feature">Выполнение заказа в <b>TURBO-режиме</b></div>
        </div>
      </div>
    </section>
  );
}

type popularProps = {
  goods: Products;
  type: string;
}

export function SectionPopular ({goods, type = 'promo'}: popularProps) {
  const filteredGoods = goods.filter((item) => item.type === type);
  return (
    <section className="popular">
      <div className="container">
        <div className="popular__heading">
          <div className="popular__title">
            <h2 className="section__title">Самое популярное</h2>
            <span>Товары, которые наиболее часто заказывают наши клиенты</span>
          </div>
          <Link className="promo__link" to={AppRoute.Products}>Все товары</Link>
        </div>
        <ul className="promo-list">
          {filteredGoods.map((good) => (
            <PromoItem item={good} key={good.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SectionSets () {
  return (
    <section className="sets">
      <div className="container">
        <img src="./img/promo_image_creative.svg" alt="Надпись Creative разноцветным шрифтом"/>
        <h2 className="section__title">Хотите удивить ваших коллег/партнеров необычными подарками?</h2>
        <p className="sets__description">Выбирайте готовые подарочные наборы или укажите критерии по которым мы соберем для Вас уникальный бокс.</p>
        <Link className="sets__link" to={AppRoute.Sets}>Перейти к наборам</Link>
      </div>
    </section>
  );
}

export function SectionMerch () {
  return (
    <section className="merch">
      <div className="container">
        <div className="merch__image-container">
          <img className="merch__image" src="./img/promo_production.png" alt="Пример мерча"/>
        </div>
        <div className="merch-description">
          <h2 className="section__title">Помимо готовой продукции высокого качества, мы можем для Вас произвести одежду, аксессуары, вкусности и другое под заказ.</h2>
          <p>Благодаря личному производству мы изготавливаем большие партии в короткие сроки, а так же у Вас всегда есть возможность кастомизировать изделия.</p>
          <div className="merch-slider">
            <div className="merch-slider__element">
              <img className="merch-slider__image" src="./img/promo_prod_slider_1.png" alt="Элемент слайдера"/>
            </div>
            <div className="merch-slider__element">
              <img className="merch-slider__image" src="./img/promo_prod_slider_2.png" alt="Элемент слайдера"/>
            </div>
            <div className="merch-slider__element">
              <img className="merch-slider__image" src="./img/promo_prod_slider_3.png" alt="Элемент слайдера"/>
            </div>
            <div className="merch-slider__element">
              <img className="merch-slider__image" src="./img/promo_prod_slider_4.png" alt="Элемент слайдера"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionContactUs () {
  return (
    <section className="contact-us">
      <div className="container">
        <h2 className="section__title">У вас своя <span className="uppercase">уникальная</span> идея по разработке мерча?</h2>
        <img className="merch__background" src="./img/idea.svg" aria-hidden="true" alt="Абстрактное изображение идеи"/>
        <p className="merch__description">Изготовим мерч по вашему дизайну. Расскажем лайфхаки и ознакомим с технологией производства, предоставим образцы матералов.</p>
        <form className="merch-form" onSubmit={handleSubmit}>
          <h3 className="merch-form__text">Введите свои контактные данные, и наш менеджер свяжется с Вами в течении 1 часа</h3>
          <div className="merch-form__inputs">
            <label className="merch-form__label">
              <input className="merch-form__input" type="text" placeholder="Ваше имя" required />
            </label>
            <label className="merch-form__label">
              <input className="merch-form__input" type="email" placeholder="Ваша электронная почта" required />
            </label>
            <label className="merch-form__label">
              <input className="merch-form__input" type="text" placeholder="Ваш номер телефона" required />
            </label>
            <button className="green-button" type="submit">Заказать</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export function SectionPartners () {
  return (
    <section className="partners">
      <div className="container">
        <h2 className="section__title">С нами сотрудничают</h2>
        <Carousel
          slidesToShow={3}
          centerMode
          draggable
          swipeToSlide
          touchThreshold={50}
          focusOnSelect
        >
          <div className="partners-element"><img className="partners__image" src="./img/logo_nike.svg" alt=""/></div>
          <div className="partners-element"><img className="partners__image" src="./img/logo_coca-cola.svg" alt=""/></div>
          <div className="partners-element"><img className="partners__image" src="./img/logo_atlas-weekend.svg" alt=""/></div>
          <div className="partners-element"><img className="partners__image" src="./img/logo_megogo.svg" alt=""/></div>
          <div className="partners-element"><img className="partners__image" src="./img/logo_crazybox.svg" alt=""/></div>
        </Carousel>
      </div>
    </section>
  );
}
