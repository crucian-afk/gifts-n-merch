import {Comment, Post, Products, User} from '../types/mock-types';

export const users: User[] = [
  {
    id: 1,
    name: 'Семен Карасюк',
    username: 'Quarasique',
    email: 'Sincere@april.biz',
    address: {
      street: 'Пушкина',
      suite: 'Apt. 556',
      city: 'Ворошиловград',
      zipcode: '142029',
      geo: {
        lat: -37.3159,
        lng: 81.1496,
      },
    },
    phone: '11111111',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Сергей',
    username: 'Sergey137',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: -43.9509,
        lng: -34.4618,
      },
    },
    phone: '222222',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Ибрагим',
    username: 'Ibra',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: -43.9509,
        lng: -34.4618,
      },
    },
    phone: '333333333',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
];

export const posts: Post[] = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 2,
    id: 12,
    title: 'in quibusdam tempore odit est dolorem',
    body: 'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio',
  },
  {
    userId: 3,
    id: 23,
    title: 'maxime id vitae nihil numquam',
    body: 'veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis',
  },
];

export const comments: Comment[] = [
  {
    postId: 1,
    id: 1,
    name: 'veritatis unde neque ',
    email: 'example@mail.com',
    body: 'Comment #1 to post 1',
  },
  {
    postId: 1,
    id: 2,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'Comment #2 to post 1',
  },
  {
    postId: 2,
    id: 6,
    name: 'et fugit eligendi deleniti quidem qui sint nihil autem',
    email: 'Presley.Mueller@myrl.com',
    body: 'Comment #1 to post 2',
  },
  {
    postId: 2,
    id: 7,
    name: 'et fugit eligendi deleniti quidem qui sint nihil autem',
    email: 'Presley.Mueller@myrl.com',
    body: 'Comment #2 to post 2',
  },
  {
    postId: 3,
    id: 3,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'Comment #1 to post 3',
  },
  {
    postId: 3,
    id: 4,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'Comment #2 to post 3',
  },
];

export const goods: Products = [
  {
    type: 'cap',
    id: 1,
    name: 'CP001 Cap #1',
    shortName: 'cap',
    price: 500,
    size: 'M',
    color: 'green',
    fabric: '100% cotton',
    description: 'Зеленая шапка',
  },
  {
    type: 'cap',
    id: 2,
    name: 'CP001 Cap #2',
    shortName: 'cap',
    price: 600,
    size: 'M',
    color: 'blue',
    fabric: '60% cotton, 40% synthetic',
    description: 'Синяя шапка',
  },
  {
    type: 'cap',
    id: 3,
    name: 'CP001 Cap #3',
    shortName: 'cap',
    price: 700,
    size: 'M',
    color: 'yellow',
    fabric: '95% cotton, 5% elastan',
    description: 'Желтая шапка',
  },
  {
    type: 'cap',
    id: 4,
    name: 'CP001 Cap #4',
    shortName: 'cap',
    price: 800,
    size: 'M',
    color: 'black',
    fabric: '70% cotton, 30% lycra',
    description: 'Черная шапка',
  },
  {
    type: 'hoodie',
    id: 5,
    name: 'HD001 Hoodie #1',
    shortName: 'hoodie',
    price: 1200,
    size: 'S',
    color: 'violet',
    fabric: '100% cotton',
    description: 'Фиолетовая толстовка',
  },
  {
    type: 'hoodie',
    id: 6,
    name: 'HD002 Hoodie #2',
    shortName: 'hoodie',
    price: 1100,
    size: 'M',
    color: 'blue',
    fabric: '100% cotton',
    description: 'Голубая толстовка',
  },
  {
    type: 'hoodie',
    id: 7,
    name: 'HD003 Hoodie #3',
    shortName: 'hoodie',
    price: 1900,
    size: 'L',
    color: 'orange',
    fabric: '100% cotton',
    description: 'Оранжевая толстовка',
  },
  {
    type: 'hoodie',
    id: 8,
    name: 'HD004 Hoodie #4',
    shortName: 'hoodie',
    price: 3400,
    size: 'XS',
    color: 'black',
    fabric: '100% cotton',
    description: 'Черная толстовка',
  },
  {
    type: 'promo',
    id: 9,
    name: 'PR001 Shopper #1',
    shortName: 'shopper',
    price: 750,
    size: 'U',
    color: 'grey/mixed',
    fabric: '100% cotton',
    description: 'Cute shopper with animal',
  },
  {
    type: 'promo',
    id: 10,
    name: 'PR002 Shopper #2',
    shortName: 'shopper',
    price: 550,
    size: 'U',
    color: 'grey/mixed',
    fabric: '100% cotton',
    description: 'Avocado shopper (also cute)',
  },
];
