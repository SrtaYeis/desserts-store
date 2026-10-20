export interface Category { id: string; name: string }

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  category?: Category; // viene de ?_expand=category
  price: number;
  image: { thumbnail: string; mobile: string; desktop: string };
}

export type ProductPayload = Omit<Product, 'id' | 'category'>;
