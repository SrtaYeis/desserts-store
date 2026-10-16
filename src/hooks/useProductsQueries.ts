import { useQuery } from '@tanstack/react-query';
import { getProduct, getProducts, type ProductFilters } from '../services/productsService';

// Todas las keys empiezan con 'products' para poder invalidarlas juntas en el Nivel 3
export const useProducts = (filters: ProductFilters) =>
  useQuery({ queryKey: ['products', filters], queryFn: () => getProducts(filters) });

export const useProduct = (id: string) =>
  useQuery({ queryKey: ['products', id], queryFn: () => getProduct(id), retry: false });
