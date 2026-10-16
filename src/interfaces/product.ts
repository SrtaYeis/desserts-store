export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: { thumbnail: string; mobile: string; desktop: string };
}
