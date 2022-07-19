export enum AppRoute {
  Root = '/',
  Post = '/post/:id',
  Comments = '/comments',
  Users = '/users',
  Person = '/person/:id',
  Products = '/products',
  Product = '/good/:type/:id',
  UnderConstruction = '/develop',
  Cart = '/cart'
}

export enum ProductType {
  'hoodie' = 'толстовка',
  'cap' = 'шапка',
  'shopper' = 'шоппер'
}
