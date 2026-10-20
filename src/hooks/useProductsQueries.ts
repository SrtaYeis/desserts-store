/**
 * Hooks de lectura para productos y categorías.
 * Aquí se conectan las consultas con React Query para obtener datos de la API.
 */
import { useQuery } from '@tanstack/react-query';
import { getCategories, getProduct, getProducts, type ProductFilters } from '../services/productsService';

export const useProducts = (filters: ProductFilters) =>
  useQuery({ queryKey: ['products', filters], queryFn: () => getProducts(filters), placeholderData: (prev) => prev });

export const useProduct = (id: string, enabled = true) =>
  useQuery({ queryKey: ['products', id], queryFn: () => getProduct(id), retry: false, enabled });

export const useCategories = () => useQuery({ queryKey: ['categories'], queryFn: getCategories });
