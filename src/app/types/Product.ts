export type Product = {
  id: number; // Omit loai bo
  title: string;
  price: number;
  image: string;
  description: string;
  category: string; // Omit loai bo
};
export type Category = {
  id: string;
  name: string;
  category: string,
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type ProductAdmin = Omit<Product, 'id' | 'category'> & {
  id: string;
  category: Category;
};
