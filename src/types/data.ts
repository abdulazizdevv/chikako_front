export interface ICategory {
  _id: string;
  createdAt: string;
  image: string;
  name: {
    uz: string;
    ru: string;
    en: string;
    cr: string;
  };
  updatedAt: string;
  __v: number;
}
export interface IBanner {
  _id: string;
  createdAt: string;
  url: string;
  image: {
    uz: string;
    ru: string;
    en: string;
    cr: string;
  };
  updatedAt: string;
  __v: number;
}
// Define the CategoryId type
export interface CategoryId {
  _id: string;
  createdAt: string;
  image: string;
  name: {
    cr: string;
    en: string;
    ru: string;
    uz: string;
  };
  updatedAt: string;
  __v: number;
}

// Define the IProduct interface
export interface IProductBack {
  _id: string;
  images: string[];
  name: {
    uz: string;
    ru: string;
    en: string;
    cr: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
    cr: string;
  };
  __v: number;
  price: number; // Assuming price is a number
  categoryId: CategoryId;
}
