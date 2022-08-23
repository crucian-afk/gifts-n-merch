export enum AppRoute {
  Root = '/',
  Post = '/post/:id',
  Comments = '/comments',
  Users = '/users',
  Person = '/person/:id',
  Products = '/products',
  Product = '/good/:type/:id',
  UnderConstruction = '/develop',
  Cart = '/cart',
  Order = '/order',
  Sets = '/sets'
}

export const ProductType = {
  hoodie: 'Толстовка',
  cap: 'Шапка',
  shopper: 'Шоппер',
};
