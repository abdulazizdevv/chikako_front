export type Translations = {
  all: string;
  home: string;
  products: string;
  categories: string;
  comments: string;
  contact: string;
  offers: string;
  delivery: string;
  delivery_desc: string;
  comfort_price_desc: string;
  comfort_price: string;
  clients_comment: string;
  hot_discount: string;
  call_center: string;
  call_center_desc: string;
  contact_us: string;
  send_contact: string;
};

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  categoryId: number;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICategory {
  createdAt: string;
  id: number;
  name: string;
  updatedAt: string;
}
