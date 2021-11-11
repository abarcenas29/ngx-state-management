export enum Category {
  books = 'books',
  electronics = 'electronics',
  furniture = 'furniture',
}

export interface Product {
  id: string;
  category: string;
  price: number;
  title: string;
  url: string;
  description: string;
  rating: number;
}

export interface AppState {
  router: any,
  product: {
    products: Product[];
  };
  cart: {
    carts: Product[];
    count: number
  };
}
