export type Translations = {
  home: string;
  about: string;
  categories: string;
  contact: string;
  pages: string;
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
