// Define los datos que necesita cada postre para mostrarse en la aplicación.
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: { thumbnail: string; mobile: string; desktop: string };
}
